import React, { useMemo } from 'react'
import { Table } from 'antd'
import { useStoreSelector } from 'hooks'
import normalizeTableData from 'pages/utils/normalizeTableData'
import { columns } from '../lib/columns'
import './styles.scss'

const ActiveCities = () => {
  const active = useStoreSelector<ICity[]>('cities.active')
  const data = useMemo(() => {
    return normalizeTableData(active) 
  }, [active])


  return <Table columns={columns} dataSource={data} />
}

export default ActiveCities
