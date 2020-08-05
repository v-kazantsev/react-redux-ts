import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

const ac = block('pages-active-cities')

const ActiveCities = () => (
  <div className={ac()}>
    Active Cities
  </div>
)

export default ActiveCities
