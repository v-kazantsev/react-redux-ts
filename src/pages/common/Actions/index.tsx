import React, { useCallback, useState } from 'react'
import { Button, Modal, Space } from 'antd'
import { useDispatch } from 'react-redux'
import { disableCity } from 'store/cities/actions'
import RestoreButton from './RestoreButton'
import MoveUpButton from './MoveUpButton'
import MoveDownButton from './MoveDownButton'

interface IProps {
  id: number
  status: 'active' | 'deleted'
  city: string
  group: ICity[]
  tab: 'all' | 'active' | 'deleted'
}

const Actions = ({ id, status, city, ...props }: IProps) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)

  const handleOpen = useCallback(() => setVisible(true), [])

  const handleClose = useCallback(() => setVisible(false), [])

  const handleDelete = useCallback(() => {
    dispatch(disableCity(id))
    setVisible(false)
  }, [id, dispatch])
  return (
    <>
      <Modal visible={visible} onCancel={handleClose} onOk={handleDelete}>
        {`Вы уверены, что хотите удалить город ${city} ?`}
      </Modal>
      <Space size='small'>
        <MoveUpButton id={id} {...props} />
        <MoveDownButton id={id} {...props} />
        {status === 'active'
          ? <Button onClick={handleOpen}>Удалить</Button>
          : <RestoreButton id={id} />}
      </Space>
    </>
  )
}
export default Actions
