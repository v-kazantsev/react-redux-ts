import { block } from 'bem-cn'
import React, { useCallback } from 'react'
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
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('PRESSED ENTER')
    }
  }, [])
  const errorMessage = error || submitError
  return (
    <>
      <input
        {...input}
        {...props}
        name={name}
        className={(t).mix(className)}
        onKeyDown={handleKeyDown}
      />
      <div className={t('error')}>
        {touched && errorMessage}
      </div>
    </>
  )
}

export default TextInput
