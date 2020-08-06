import { block } from 'bem-cn'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Tabs, TabsHead, TabsTail } from 'components'
import './styles.scss'

const ac = block('app-content')

const AppContent: React.FC = ({ children }) => {
  return (
    <>
      <Tabs>
        <TabsHead>
          <NavLink exact to='/' className={ac('link')} activeClassName={ac('active-link')}>
            Все
          </NavLink>
          <NavLink to='/active' className={ac('link')} activeClassName={ac('active-link')}>
            Активные
          </NavLink>
          <NavLink to='/deleted' className={ac('link')} activeClassName={ac('active-link')}>
            Удаленные
          </NavLink>
        </TabsHead>
        <TabsTail />
      </Tabs>
      {children}
    </>
  )
}

export default AppContent
