import React from 'react'
import Header from '../components/section/Header'
import Portfolio from '../components/section/Portfolio'
import About from '../components/section/About'
import Skills from '../components/section/Skills'
import Contact from '../components/section/Contact'

interface HomeProps {
  homeTargetId: string
  aboutTargetId: string
  skillTargetId: string
  portfolioTargetId: string
  contactTargetId: string
  scrollToPortfolio: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div>
      <Header
        targetId={props.homeTargetId}
        scrollToPortfolio={props.scrollToPortfolio}
      />
      <About
        targetId={props.aboutTargetId}
        scrollToPortfolio={props.scrollToPortfolio}
      />
      <Skills targetId={props.skillTargetId} />
      <Portfolio targetId={props.portfolioTargetId} />
      <Contact targetId={props.contactTargetId} />
    </div>
  )
}

export default Home
