import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

interface IProps {
  className?: string
}

const t = block('custom-table')

const Table: React.FC<IProps> = ({ className = '', children }) => (
  <table className={(t).mix(className)}>
    {children}
  </table>
)

export default Table
