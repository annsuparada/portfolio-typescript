import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Blogs />
      </div>
    </div>
  )
}

export default Home
