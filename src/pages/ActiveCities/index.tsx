import React, { useMemo } from 'react'
import sortBy from 'lodash/sortBy'
import { useStoreSelector } from 'hooks'
import Cities from '../common/Cities'
import './styles.scss'

const ActiveCities = () => {
  const active = useStoreSelector<ICity[]>('cities.active')
  const group = useMemo(() => {
    return sortBy(active, 'position')
  }, [active])

  return <Cities group={group} />
}

export default ActiveCities
