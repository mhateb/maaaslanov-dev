import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'

type LinkPropsType = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string
  children?: ReactNode
}

const Link = ({ to, ...props }: LinkPropsType) => {
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    return <a href={to} {...props} />
  }
  return <RouterLink to={to} {...props} />
}

export default Link
