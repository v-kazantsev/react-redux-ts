import { Button } from 'antd'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { moveDown } from 'store/cities/actions'

interface IProps {
  id: number,
  group: 'active' | 'deleted' | 'all',
}

const MoveDownButton = ({ id, group }: IProps) => {
  const dispatch = useDispatch()

  const handleClick = useCallback((group, id) => {
    dispatch(moveDown({ group, id }))
  }, [])

  return (
    <Button onClick={() => handleClick(group, id)}>
      Вниз
    </Button>
  )
}

export default MoveDownButton
