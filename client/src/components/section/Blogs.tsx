import React from 'react'
import { Link } from 'react-router-dom'

const Blogs: React.FC = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <Link to="/blog/1">Go to Blog 1</Link>
      <br />
      <Link to="/blog/2">Go to Blog 2</Link>
    </div>
  )
}

export default Blogs
