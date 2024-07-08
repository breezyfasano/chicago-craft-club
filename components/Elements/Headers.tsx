import type { HeaderProps } from './types'

export const H2 = ({ children, className }: HeaderProps) => {
  return (
    <h2 className={`text-md font-display lg:text-xl text-center ${className}`}>
      {children}
    </h2>
  )
}
