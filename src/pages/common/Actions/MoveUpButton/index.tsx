import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { moveUp } from 'store/cities/actions'
import swapCitiesUp from '../utils/swapCitiesUp'

interface IProps {
  id: number
  group: ICity[]
  tab: 'all' | 'active' | 'deleted'
}

const MoveUpButton = ({ id, group, tab }: IProps) => {
  const dispatch = useDispatch()

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    const cities = swapCitiesUp(group, id)
    dispatch(moveUp({ group: cities, tab }))
  }, [dispatch, group, id, tab])

  return <Button onClick={handleClick}>Вверх</Button>
}

export default MoveUpButton
