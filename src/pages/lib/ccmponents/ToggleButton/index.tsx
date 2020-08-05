import { Button } from 'antd'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { enableCity, disableCity } from 'store/cities/actions'

interface IProps {
  id: number,
  status: 'active' | 'deleted'
}

const ToggleButton = ({ id, status }: IProps) => {
  const dispatch = useDispatch()

  const handleClick = useCallback((status, id) => {
    dispatch(status === 'active' ? disableCity(id) : enableCity(id))
  }, [])

  return (
  <Button onClick={() => handleClick(status, id)}>
    {status === 'active' ? 'Удалить' : 'Восстановить'}
  </Button>)
}

export default ToggleButton
