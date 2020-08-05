import { block } from 'bem-cn'
import React from 'react'
import './styles.scss'

const c = block('container')

const Container: React.FC = ({ children }) => (
  <div className={c()}>
    {children}
  </div>
)

export default Container
