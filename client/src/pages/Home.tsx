import React from 'react'
import Blogs from '../components/section/Blogs'
import Header from '../components/section/Header'
import Projects from '../components/Projects'
import About from '../components/section/About'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Blogs />
    </div>
  )
}

export default Home
