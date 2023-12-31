import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import { theme } from './theme'

const App: React.FC = () => {
  const scrollToOnClick = (targetId: string) => {
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const homeTargetId = 'home'
  const aboutTargetId = 'about'
  const skillTargetId = 'skill'
  const portfolioTargetId = 'portfolio'
  const contactTargetId = 'contact'
  return (
    <ThemeProvider theme={theme}>
      <Layout
        scrollToHome={() => scrollToOnClick(homeTargetId)}
        scrollToAbout={() => scrollToOnClick(aboutTargetId)}
        scrollToSkills={() => scrollToOnClick(skillTargetId)}
        scrollToPortfolio={() => scrollToOnClick(portfolioTargetId)}
        scrollToContact={() => scrollToOnClick(contactTargetId)}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  homeTargetId={homeTargetId}
                  aboutTargetId={aboutTargetId}
                  skillTargetId={skillTargetId}
                  portfolioTargetId={portfolioTargetId}
                  contactTargetId={contactTargetId}
                  scrollToPortfolio={() => scrollToOnClick(portfolioTargetId)}
                />
              }
            />
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

export default App
