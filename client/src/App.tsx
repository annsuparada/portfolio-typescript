import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import { theme } from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

export default App
