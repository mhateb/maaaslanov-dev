import { Link as RouterLink } from 'react-router-dom'

export function Link({ to, ...props }) {
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    return <a href={to} {...props} />
  }
  return <RouterLink to={to} {...props} />
}
