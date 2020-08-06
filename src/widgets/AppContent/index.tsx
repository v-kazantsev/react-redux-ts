import React from 'react'
import { Tabs } from 'components'

const AppContent: React.FC = ({ children }) => (
  <Tabs>
    {children}
  </Tabs>
)

export default AppContent
