import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

interface IProps {
  type?: 'submit' | 'reset' | 'button'
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}

const b = block('button')

const Button: React.FC<IProps> = ({ type = 'button', className = '', children, disabled = false, ...props }) => (
  <button
    className={b({disabled}).mix(className)}
    type={type}
    {...props}
  >
    {children}
  </button>
)

export default Button
