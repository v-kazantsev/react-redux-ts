import React, { useMemo } from 'react'
import sortBy from 'lodash/sortBy'
import { useStoreSelector } from 'hooks'
import Cities from '../common/Cities'

import './styles.scss'

const AllCities = () => {
  const all = useStoreSelector<ICity[]>('cities.all')
  const group = useMemo(() => {
    return sortBy(all, 'position')
  }, [all])

  return <Cities group={group} tab='all' />
}

export default AllCities
