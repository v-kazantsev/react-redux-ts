import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from 'antd'
import { Form } from 'react-final-form'
import { TextInput } from 'components'
import { updateCity } from 'store/cities/actions'
import validate from './validate'

interface IProps {
  city: ICity | null
  visible: boolean
  onClose: () => void
}

const Dialog = ({ city, visible, onClose }: IProps) => {
  const dispatch = useDispatch()
  const initialValues = useMemo(() => {
    return { ...city, temperature: city?.main?.temp }
  }, [city])

  const onSubmit = useCallback((values) => {
    values.main.temp = +values.temperature
    delete values.temperature
    dispatch(updateCity(values))
    onClose()
  }, [dispatch, onClose])

  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    onClose()
  }, [onClose])

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <Modal
          title='Изменить значения вручную'
          visible={visible}
          onOk={handleSubmit}
          onCancel={handleClose}
        >
          <form onSubmit={handleSubmit}>
            <TextInput
              name='name'
              readOnly
            />
            <TextInput
              name='temperature'
            />
          </form>
        </Modal>
      )}
    />
  )
}

export default Dialog
