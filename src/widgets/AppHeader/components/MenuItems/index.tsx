import { block } from 'bem-cn'
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import './styles.scss'

const { Item } = Menu

const mi = block('app-header-menu-items')

const MenuItems = () => {
  const [current, setCurrent] = useState('all')
  const handleClick = useCallback((e) => {
    setCurrent(e.key)
  }, [])
  return (
    <Menu mode='horizontal' onClick={handleClick} selectedKeys={[current]} className={mi()}>
      <Item key='all'>
        <Link to='/'>Все</Link>
      </Item>
      <Item key='active'>
        <Link to='/active'>Активные</Link>
      </Item>
      <Item key='deleted'>
        <Link to='/deleted'>Удаленные</Link>
      </Item>
    </Menu>
  )
}

export default MenuItems
