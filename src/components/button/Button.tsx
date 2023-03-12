import { FC } from 'react'
import { IButtonProps } from './button.types'

export const Button: FC<IButtonProps> = ({ children }) => {
  return <button>{children}</button>
}
