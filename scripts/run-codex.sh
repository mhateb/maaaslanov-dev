#!/bin/sh
set -eu

mode=preview
if [ "$#" -ge 3 ]; then
  mode=$1
  shift
fi

case "$mode:$#" in
  preview:2|apply:2|apply:3) ;;
  *)
    printf 'Использование: %s [preview|apply] <путь к SKILL.md> <хеш> [хеш до merge]\n' "$0" >&2
    exit 2
    ;;
esac

skill_path=$1
commit_hash=$2
base_hash=${3:-}

if [ ! -r "$skill_path" ] || [ ! -f "$skill_path" ]; then
  printf 'Не удалось прочитать навык: %s\n' "$skill_path" >&2
  exit 1
fi

if ! command -v codex >/dev/null 2>&1; then
  printf 'Команда codex не найдена в PATH.\n' >&2
  exit 1
fi

repo_root=$(git rev-parse --show-toplevel)
cd "$repo_root"
commit_hash=$(git rev-parse --verify --end-of-options "$commit_hash^{commit}")

if [ -n "$base_hash" ]; then
  base_hash=$(git rev-parse --verify --end-of-options "$base_hash^{commit}")
  git merge-base --is-ancestor "$base_hash" "$commit_hash"
  diff_command="git diff $base_hash $commit_hash"
else
  diff_command="git show --first-parent $commit_hash"
fi

if [ "$mode" = apply ]; then
  if [ "$(git rev-parse HEAD)" != "$commit_hash" ] ||
     [ -n "$(git status --porcelain -- package.json package-lock.json)" ]; then
    printf 'Повышение отменено: HEAD изменился или в файлах версии есть локальные правки.\n' >&2
    exit 1
  fi
fi

skill_content=$(cat "$skill_path")
if ! bump=$(
  {
    printf 'Определи тип следующего повышения версии приложения. Изучи изменения командой %s.\n' "$diff_command"
    printf 'Верни ровно одно слово: patch, minor, major или skip. Используй skip для правок только документации, служебных файлов и версии.\n'
    printf 'Инструкция навыка ниже. В этом запуске только классифицируй изменения.\n\n'
    printf '%s\n' "$skill_content"
  } | codex exec --sandbox read-only -
); then
  printf 'Codex не смог определить тип повышения.\n' >&2
  exit 1
fi

case "$bump" in
  patch|minor|major) ;;
  skip)
    printf 'Повышение версии не требуется.\n'
    exit 0
    ;;
  *)
    printf 'Codex вернул неожиданный тип повышения: %s\n' "$bump" >&2
    exit 1
    ;;
esac

current_version=$(node -p 'require("./package.json").version || ""')
if [ "$mode" = preview ]; then
  if [ -n "$current_version" ]; then
    printf 'Текущая версия: %s. Codex предлагает: %s.\n' "$current_version" "$bump"
  else
    printf 'Текущей версии нет. Начальная версия: 0.1.0.\n'
  fi
  exit 0
fi

if [ "$(git rev-parse HEAD)" != "$commit_hash" ] ||
   [ -n "$(git status --porcelain -- package.json package-lock.json)" ]; then
  printf 'Повышение отменено: HEAD изменился или в файлах версии есть локальные правки.\n' >&2
  exit 1
fi

printf 'Codex выбрал: %s.\n' "$bump"
if [ -z "$current_version" ]; then
  bump=0.1.0
fi
npm version "$bump" --no-git-tag-version --ignore-scripts
