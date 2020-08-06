import React from 'react'
import { Button, Space } from 'antd'
import ToggleButton from './ToggleButton'

interface IProps {
  id: number
  status: 'active' | 'deleted'
}

const Actions = ({ id, status }: IProps) => (
  <Space size='small'>
    <Button>Вверх</Button>
    <Button>Вниз</Button>
    <ToggleButton id={id} status={status} />
  </Space>
)
export default Actions
