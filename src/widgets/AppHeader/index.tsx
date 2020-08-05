import { block } from 'bem-cn'
import React from 'react'
import SearchBar from 'widgets/SearchBar'
import MenuItems from './components/MenuItems'
import './styles.scss'

const ah = block('application-header')

const AppHeader = () => (
  <div className={ah()}>
    <SearchBar />
    <MenuItems />
  </div>
)

export default AppHeader
