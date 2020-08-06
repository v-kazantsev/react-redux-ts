import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

interface IProps {
  className?: string
}

const tr = block('custom-table-row')

const TableRow: React.FC<IProps> = ({ className = '', children }) => (
  <tr className={(tr).mix(className)}>
    {children}
  </tr>
)

export default TableRow
