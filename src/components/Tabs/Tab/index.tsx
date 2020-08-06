import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

interface IProps {
  active: boolean
  onClick: () => void
}

const t = block('custom-tabs-tab')

const Tab: React.FC<IProps> = ({ active, onClick, children }) => (
  <div className={t({ active })} onClick={onClick}>
    {children}
  </div>
)

export default Tab
