import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

interface IProps {
  className?: string
}

const bc = block('custom-table-body-cell')

const BodyCell: React.FC<IProps> = ({ className = '', children }) => (
  <td className={(bc).mix(className)}>
    {children}
  </td>
)

export default BodyCell
