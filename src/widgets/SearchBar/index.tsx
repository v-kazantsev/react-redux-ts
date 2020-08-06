import { block } from 'bem-cn'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'components'
import fetchCityWeather from 'api/fetchCityWeather'
import { addCity } from 'store/cities/actions'
import './styles.scss'

const sb = block('search-bar')

const SearchBar = () => {
  const dispatch = useDispatch()
  const [submitting, setSubmitting] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (!value) { return setError('Поле не может быть пустым') }
    setSubmitting(true)
    return fetchCityWeather(value)
      .then((res) => dispatch(addCity(res)))
      .catch(setError)
      .finally(() => {
        setSubmitting(false)
        setValue('')
      })
  }, [value])

  const handleChange = useCallback((e) => {
    if (error) { setError('') }
    setValue(e.target.value)
  }, [error])

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      return handleSubmit(e)
    }
  }, [value])

  return (
    <div className={sb()}>
      <form onSubmit={handleSubmit}>
        <div className={sb('form')}>
          <Input
            className={sb('input')}
            name='search'
            value={value}
            onChange={handleChange}
            placeholder='Введите название города'
            onKeyDown={onKeyDown}
          />
          <Button className={sb('button')} type='submit' disabled={submitting}>
            Искать
          </Button>
        </div>
        {!!error && <div className={sb('error')}>{error}</div> }
      </form>
    </div>
  )
}

export default SearchBar
