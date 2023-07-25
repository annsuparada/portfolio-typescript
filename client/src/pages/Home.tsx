import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Projects from '../components/Projects'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Projects />
        <Blogs />
      </div>
    </div>
  )
}

export default Home
