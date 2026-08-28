import Link from 'next/link'
import { ButtonProps } from './types'

export const Button = ({
  children,
  link,
  secondary,
  className,
  newTab,
}: ButtonProps) => {
  return (
    <Link
      href={link}
      passHref
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noreferrer' : ''}
      className={`button ${secondary ? 'bg-pink' : '!bg-yellow'} ${className}`}
    >
      {children}
    </Link>
  )
}
