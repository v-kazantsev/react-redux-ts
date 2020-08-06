import { block } from 'bem-cn'
import React, { useMemo } from 'react'
import { Table } from 'antd'
import { useStoreSelector } from 'hooks'
import normalizeTableData from 'pages/utils/normalizeTableData'
import { columns } from '../lib/columns'
import './styles.scss'

const ac = block('pages-all-cities')

const AllCities = () => {
  const all = useStoreSelector<ICity[]>('cities.all')
  const data = useMemo(() => normalizeTableData(all), [all])

  console.log(data)

  return (
    <div className={ac()}>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default AllCities
