import React from 'react'

interface IProps {
  className?: string
}

const TableBody: React.FC<IProps> = ({ className = '', children }) => (
  <tbody className={className}>
    {children}
  </tbody>
)

export default TableBody
