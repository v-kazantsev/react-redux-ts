import { block } from 'bem-cn'
import React from 'react'
import { useField } from 'react-final-form'
import './styles.scss'

interface IProps {
  name: string
  className?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
}

const t = block('text-input')

const TextInput = ({ className = '', name, ...props }: IProps) => {
  const { input, meta: { touched, error, submitError } } = useField(name)
  const errorMessage = error || submitError
  return (
    <>
      <input
        {...input}
        {...props}
        name={name}
        className={(t).mix(className)}
      />
      <div className={t('error')}>
        {touched && errorMessage}
      </div>
    </>
  )
}

export default TextInput
