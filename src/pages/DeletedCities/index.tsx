import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

const dc = block('pages-deleted-cities')

const DeletedCities = () => (
  <div className={dc()}>
    Deleted Cities
  </div>
)

export default DeletedCities
