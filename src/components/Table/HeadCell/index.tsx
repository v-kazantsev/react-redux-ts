import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

interface IProps {
  className?: string
}

const hc = block('custom-table-head-cell')

const HeadCell: React.FC<IProps> = ({ className = '', children }) => (
  <th className={(hc).mix(className)} scope='col'>
    {children}
  </th>
)

export default HeadCell
