import { block } from 'bem-cn'
import React, { useState } from 'react'
import './styles.scss'

interface IProps {
  name: string
  className?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
}

const t = block('text-input')

const TextInput = ({className = '', ...props}: IProps) => {
  // const [value, setValue] = useState('')
  return (
    <input
      className={(t).mix(className)}
      {...props}
    />
    )
}

export default TextInput
