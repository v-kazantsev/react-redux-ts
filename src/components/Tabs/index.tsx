import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

const th = block('custom-tabs')

const Tabs: React.FC = ({ children }) => (
  <div className={th()}>
    {children}
  </div>
)

export default Tabs
