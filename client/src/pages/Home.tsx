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
}
const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div>
      <Header targetId={props.homeTargetId} />
      <About targetId={props.aboutTargetId} />
      <Skills targetId={props.skillTargetId} />
      <Portfolio targetId={props.portfolioTargetId} />
      <Contact targetId={props.contactTargetId} />
    </div>
  )
}

export default Home
