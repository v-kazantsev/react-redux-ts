import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

interface IProps {
  className?: string
}

const th = block('custom-table-head')

const TableHead: React.FC<IProps> = ({ className = '', children }) => (
  <thead className={(th).mix(className)}>
    <tr>
      {children}
    </tr>
  </thead>
)

export default TableHead
