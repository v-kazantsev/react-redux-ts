import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

export interface IInputProps {
  name: string
  type?: string
  value?: string
  onChange?: (e: unknown) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  className?: string
  placeholder?: string
}

const i = block('custom-input')

const Input = ({
  name,
  type = 'text',
  className,
  ...props
}: IInputProps) => (
  <input
    name={name}
    id={name}
    type={type}
    {...props}
    className={i()}
  />
)

export default Input
