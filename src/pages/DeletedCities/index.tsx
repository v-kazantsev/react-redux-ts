import React, { useMemo } from 'react'
import sortBy from 'lodash/sortBy'
import { useStoreSelector } from 'hooks'
import Cities from '../common/Cities'
import './styles.scss'

const DeletedCities = () => {
  const deleted = useStoreSelector<ICity[]>('cities.deleted')
  const group = useMemo(() => {
    return sortBy(deleted, 'position')
  }, [deleted])

  return <Cities group={group} />
}

export default DeletedCities
