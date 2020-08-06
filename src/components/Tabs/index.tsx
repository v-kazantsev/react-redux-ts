import { block } from 'bem-cn'
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Tab from './Tab'
import './styles.scss'

const t = block('custom-tabs')

const routes = {
  1: '/',
  2: '/active',
  3: '/deleted',
}

const Tabs: React.FC = ({ children }) => {
  const history = useHistory()
  const [activeTab, setActiveTab] = useState('1')
  const onTabClick = useCallback((index: string) => {
    setActiveTab(index)
    history.push((routes as any)[index])
  }, [history])
  return (
    <div className={t()}>
      <div className={t('header')}>
        <div className={t('head')}>
          <Tab active={activeTab === '1'} onClick={() => onTabClick('1')}>
            Все
          </Tab>
          <Tab active={activeTab === '2'} onClick={() => onTabClick('2')}>
            Активные
          </Tab>
          <Tab active={activeTab === '3'} onClick={() => onTabClick('3')}>
            Удаленные
          </Tab>
        </div>
        <div className={t('tail')} />
      </div>
      {children}
    </div>
  )
}

export default Tabs
