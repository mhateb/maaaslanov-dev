import type { Translate } from '../language'

import fitpix from '../assets/projects/fitpix.png'
import sdvig from '../assets/projects/sdvig.jpg'
import sever from '../assets/projects/sever.webp'

export type RepositoryProject = {
  title: string
  subtitle: string
  image: string
  imageAlt: string
  demo?: string
  walkthrough?: string
  repository: string
  facts: [string, string, string]
}

export const getRepositoryProjects = (t: Translate): RepositoryProject[] => [
  {
    title: t("СДВИГ", "SDVIG"),
    subtitle: t("Интерактивный промосайт настольной лампы", "Interactive desk lamp microsite"),
    image: sdvig,
    imageAlt: t("Одна лампа на рабочем столе при дневном и вечернем освещении", "The same desk lamp in daytime and evening lighting"),
    demo: 'https://mhateb.github.io/sdvig-portfolio/',
    repository: 'https://github.com/mhateb/sdvig-portfolio',
    facts: [
      t("Показать конструкцию лампы и то, как её свет меняет рабочее место.", "Show how the lamp is built and how its light changes a workspace."),
      t("Перенёс детали из Figma в SVG, связал сборку лампы с прокруткой через GSAP и сделал переключатель света.", "Converted parts from Figma to SVG, tied the assembly animation to scrolling with GSAP, and built a light switch."),
      t("На сайте можно разобрать и собрать лампу прокруткой и сравнить рабочее и вечернее освещение.", "Visitors can take the lamp apart and put it back together by scrolling, then compare work and evening lighting."),
    ],
  },
  {
    title: t("север/", "sever/"),
    subtitle: t("Лендинг модульных домов", "Modular homes landing page"),
    image: sever,
    imageAlt: t("Первый экран сайта «север/» на десктопе и телефоне", "The sever/ home page on desktop and mobile"),
    demo: 'https://mhateb.github.io/sever-portfolio/',
    repository: 'https://github.com/mhateb/sever-portfolio',
    facts: [
      t("Дать посетителю возможность изучить модели домов и выбрать подходящую.", "Help visitors explore the home models and choose one that suits them."),
      t("Собрал адаптивный лендинг на Next.js, связал карточки моделей с формой запроса каталога.", "Built a responsive Next.js landing page and connected the model cards to the catalog request form."),
      t("Выбранная модель подставляется в форму. В демо можно пройти сценарий до подтверждения.", "The selected model appears in the form. The demo runs through to the confirmation screen."),
    ],
  },
  {
    title: 'Fitpix',
    subtitle: t("Оптимизация изображений для веба", "Image optimization for the web"),
    image: fitpix,
    imageAlt: t("Fitpix показывает исходное изображение и размер файлов после оптимизации", "Fitpix shows the original image and optimized file sizes"),
    walkthrough: t(
      'https://github.com/mhateb/images-helper/blob/HEAD/README.ru.md#как-это-выглядит',
      'https://github.com/mhateb/images-helper/blob/HEAD/README.md',
    ),
    repository: 'https://github.com/mhateb/images-helper',
    facts: [
      t("Подготовить изображения из макета к публикации на сайте.", "Prepare images from design files for publication on the web."),
      t("Собрал очередь файлов и кроп в React, обработку изображений реализовал через Fastify и Sharp.", "Built the file queue and crop controls in React, with image processing in Fastify and Sharp."),
      t("Можно обработать до 20 изображений за раз и сравнить вес JPEG, PNG, WebP и AVIF.", "Users can process up to 20 images at a time and compare JPEG, PNG, WebP, and AVIF file sizes."),
    ],
  },
]
