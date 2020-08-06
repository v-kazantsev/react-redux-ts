import React, { useMemo } from 'react'
import { Table } from 'antd'
import { useStoreSelector } from 'hooks'
import normalizeTableData from 'pages/utils/normalizeTableData'
import { columns } from '../lib/columns'
import './styles.scss'

const DeletedCities = () => {
  const deleted = useStoreSelector<ICity[]>('cities.deleted')
  const data = useMemo(() => normalizeTableData(deleted), [deleted])

  return <Table columns={columns} dataSource={data} />
}

export default DeletedCities
