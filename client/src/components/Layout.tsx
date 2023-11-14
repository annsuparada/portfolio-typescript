import React from 'react'
import { ScrollToOnClick } from '../types'
import Footer from './Footer'
import Navigation from './Navigation'

interface Children {
  children: React.ReactNode
}

interface LayoutProps extends Children, ScrollToOnClick {}
const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <div className="container">
      <Navigation />
      <div className="body">{props.children}</div>
      <Footer
        scrollToHome={props.scrollToHome}
        scrollToAbout={props.scrollToAbout}
        scrollToSkills={props.scrollToSkills}
        scrollToPortfolio={props.scrollToPortfolio}
        scrollToContact={props.scrollToContact}
      />
    </div>
  )
}

export default Layout
