import { block } from 'bem-cn'
import React from 'react'
import { Table, Button, Space } from 'antd'
import { ITableData } from '../types'
import './styles.scss'

const ac = block('pages-all-cities')

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <span>{text}</span>
  },
  {
    title: 'Temperature',
    dataIndex: 'temperature',
    key: 'temperature',
    render: (text: string) => <span>{text}</span>
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (_: unknown, record: ITableData) => (
      <Space size='small'>
        <Button>Up</Button>
        <Button>Down</Button>
        <Button>{record.status === 'active' ? 'Delete' : 'Restore'}</Button>
      </Space>
    )
  }
]

const data: ITableData[] = [
  {
    key: '1',
    name: 'Vladivostok',
    temperature: '18',
    status: 'active'
  },
  {
    key: '2',
    name: 'Barnaul',
    temperature: '30',
    status: 'deleted'
  }
]

const AllCities = () => (
  <div className={ac()}>
    <Table columns={columns} dataSource={data} />
  </div>
)

export default AllCities
