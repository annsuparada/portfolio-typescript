import React from 'react'
import { useParams } from 'react-router-dom'

const BlogPage: React.FC = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>Blog {id}</h1>
      test blog page
    </div>
  )
}

export default BlogPage
