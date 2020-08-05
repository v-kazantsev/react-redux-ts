import { block } from 'bem-cn'
import React, { useCallback, useState } from 'react'
import { Form } from 'antd'
import { useDispatch } from 'react-redux'
import { Button, TextInput } from 'components'
import fetchCityWeather from 'api/fetchCityWeather'
import { addCity } from 'store/cities/actions'
import './styles.scss'

const sb = block('search-bar')
const { Item } = Form

const SearchBar = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>
    { setValue(event.target.value) }, [])

  const onFinish = ({ search }: any) => {
    fetchCityWeather(search)
      .then((res) => dispatch(addCity(res)))
      .then(() => setValue(''))
      .catch((error) => console.error(error))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  };
  return (
    <div className={sb()}>
      <Form
        name='city_name'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Item
          name='search'
          rules={[{ required: true, message: 'Поле не может быть пустым' }]}
        >
          <TextInput
            className={sb('input')}
            name='search'
            value={value}
            onChange={handleInput}
            placeholder='Введите название города'
          />
        </Item>
        <Button className={sb('button')} type='submit'>Искать</Button>
      </Form>
    </div>
  )
}

export default SearchBar