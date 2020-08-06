import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { moveDown } from 'store/cities/actions'
import swapCitiesDown from '../utils/swapCitiesDown'

interface IProps {
  id: number
  group: ICity[]
  tab: 'all' | 'active' | 'deleted'
}

const MoveDownButton = ({ id, group, tab }: IProps) => {
  const dispatch = useDispatch()

  const handleClick = useCallback(() => {
    const cities = swapCitiesDown(group, id)
    dispatch(moveDown({ group: cities, tab }))
  }, [dispatch, group, id, tab])

  return <Button onClick={handleClick}>Вниз</Button>
}

export default MoveDownButton
