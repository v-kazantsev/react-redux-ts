import { block } from 'bem-cn'
import React from 'react'
import { Layout as AntdLayout } from 'antd'
import './styles.scss'

const l = block('main-layout')
const { Content, Header, Footer } = AntdLayout

const Layout: React.FC = ({ children }) => (
  <AntdLayout className={l()}>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer>&copy; 2020</Footer>
  </AntdLayout>
)

export default Layout
