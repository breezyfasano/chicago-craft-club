import Link from 'next/link'
import { ButtonProps } from './types'

export const Button = ({
  children,
  link,
  secondary,
  className,
}: ButtonProps) => {
  return (
    <Link
      href={link}
      className={`inline-block shadow-[4px_4px_0px_#000] border-[3px] border-gray ${
        secondary ? 'bg-pink' : 'bg-yellow'
      } px-6 py-2 text-gray rounded-full font-bold text-sm lg:text-lg ${className}`}
    >
      {children}
    </Link>
  )
}
