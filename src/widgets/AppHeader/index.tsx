import { block } from 'bem-cn'
import React from 'react'
import SearchBar from 'widgets/SearchBar'
import './styles.scss'

const ah = block('application-header')

const AppHeader = () => (
  <div className={ah()}>
    <SearchBar />
  </div>
)

export default AppHeader
