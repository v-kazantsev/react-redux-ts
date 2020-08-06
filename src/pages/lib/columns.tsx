import React from 'react'
import { Button, Space } from 'antd'
import { ITableData } from '../types'
import { MoveDownButton, MoveUpButton, ToggleButton } from './components'

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: 'Temperature',
    dataIndex: 'temperature',
    key: 'temperature',
    render: (text: string) => (
      <span>
        {text}
        &deg;C
      </span>
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (_: unknown, record: ITableData) => (
      <Space size='small'>
        <Button>Вверх</Button>
        <Button>Вниз</Button>
        <ToggleButton status={record.status} id={record.id} />
      </Space>
    ),
  },
]
