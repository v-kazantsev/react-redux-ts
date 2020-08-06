import React from 'react'
import { BodyCell, Table, TableHead, HeadCell, TableBody, TableRow } from 'components'
import Actions from '../Actions'

interface IProps {
  group: ICity[]
  tab: 'all' | 'active' | 'deleted'
}

const Cities = ({ group, tab }: IProps) => (
  <Table>
    <TableHead>
      <HeadCell>Город</HeadCell>
      <HeadCell>Температура</HeadCell>
      <HeadCell>Действия</HeadCell>
    </TableHead>
    <TableBody>
      {group.map((city) => (
        <TableRow key={city.id}>
          <BodyCell>{city?.name}</BodyCell>
          <BodyCell>{city?.main?.temp.toFixed(0)}&deg;C</BodyCell>
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
)

export default Cities
