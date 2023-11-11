import React from 'react'
import Header from '../components/section/Header'
import Projects from '../components/section/Projects'
import About from '../components/section/About'
import Skills from '../components/section/Skills'
import Contact from '../components/section/Contact'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
