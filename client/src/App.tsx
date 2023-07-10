import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </Router>
    </Layout>
  )
}

export default App
