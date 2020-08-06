import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

interface IProps {
  className?: string
  onClick?: () => void
}

const tr = block('custom-table-row')

const TableRow: React.FC<IProps> = ({ className = '', onClick, children }) => (
  <tr className={(tr).mix(className)} onClick={onClick}>
    {children}
  </tr>
)

export default TableRow
