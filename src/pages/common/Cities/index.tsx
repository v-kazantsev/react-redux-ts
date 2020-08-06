import { block } from 'bem-cn'
import React, { useState, useCallback } from 'react'
import { BodyCell, Table, TableHead, HeadCell, TableBody, TableRow } from 'components'
import Actions from '../Actions'
import Dialog from '../Dialog'
import './styles.scss'

interface IProps {
  group: ICity[]
  tab: 'all' | 'active' | 'deleted'
}

const c = block('cities-table')

const Cities = ({ group, tab }: IProps) => {
  const [visible, setVisible] = useState(false)
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null)

  const onRowClick = useCallback((city: ICity) => {
    setSelectedCity(city)
    setVisible(true)
  }, [])

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])
  return (
    <>
    <Table>
      <TableHead>
        <HeadCell>Город</HeadCell>
        <HeadCell>Температура</HeadCell>
        <HeadCell>Действия</HeadCell>
      </TableHead>
      <TableBody>
        {group.map((city) => (
          <TableRow key={city.id} className={c('row')} onClick={() => onRowClick(city)}>
            <BodyCell>
              <span className={c('name', { disabled: city?.status === 'deleted' })}>
                {city?.name}
              </span>
            </BodyCell>
            <BodyCell>
              <span className={c('temperature', { disabled: city?.status === 'deleted' })}>
                {city?.main?.temp.toFixed(0)}&deg;C
              </span>
            </BodyCell>
            <BodyCell>
              <Actions
                id={city?.id}
                status={city?.status}
                city={city.name}
                group={group}
                tab={tab}
              />
            </BodyCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Dialog city={selectedCity} visible={visible} onClose={onClose} />
    </>
  )
}

export default Cities
