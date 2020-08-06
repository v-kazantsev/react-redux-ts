import { Button } from 'antd'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { moveUp } from 'store/cities/actions'

interface IProps {
  id: number,
  group: 'active' | 'deleted' | 'all',
}

const MoveUpButton = ({ id, group }: IProps) => {
  const dispatch = useDispatch()

  const handleClick = useCallback((group, id) => {
    dispatch(moveUp({ group, id }))
  }, [])

  return (
    <Button onClick={() => handleClick(group, id)}>
      Вверх
    </Button>
  )
}

export default MoveUpButton
