import React from 'react'
import Navigation from './Navigation'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <div className="container">
      <Navigation />
      <div className="body">{props.children}</div>
    </div>
  )
}

export default Layout
