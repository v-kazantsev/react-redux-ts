import { Button } from 'antd'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { enableCity } from 'store/cities/actions'

interface IProps {
  id: number,
}

const RestoreButton = ({ id }: IProps) => {
  const dispatch = useDispatch()

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(enableCity(id))
  }, [id, dispatch])

  return (
    <Button onClick={handleClick}>
      Восстановить
    </Button>
  )
}

export default RestoreButton
