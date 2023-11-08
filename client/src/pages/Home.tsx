import React from 'react'
import Header from '../components/section/Header'
import Projects from '../components/Projects'
import About from '../components/section/About'
import Skills from '../components/section/Skills'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
