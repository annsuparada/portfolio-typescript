import React from 'react'
import { desktopView, lightBackground, pink, secondary } from '../../theme'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import JavascriptIcon from '@mui/icons-material/Javascript'
import GitHubIcon from '@mui/icons-material/GitHub'

const Skills: React.FC = () => {
  const styles = {
    container: {
      backgroundColor: lightBackground,
      width: '100%',
      padding: '20px 0 50px',
    },
    h1: {
      color: secondary,
    },
    grid: {
      maxWidth: desktopView,
      margin: '0 auto',
      padding: '10px',
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '10px',
    },
    icon: {
      fontSize: '100px',
      color: secondary,
    },
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Skills</h1>
      <div style={styles.grid}>
        <HtmlIcon style={styles.icon} />
        <CssIcon style={styles.icon} />
        <JavascriptIcon style={styles.icon} />
        <JavascriptIcon style={styles.icon} />
        <GitHubIcon style={styles.icon} />
        <GitHubIcon style={styles.icon} />
        <GitHubIcon style={styles.icon} />
        <GitHubIcon style={styles.icon} />
        <GitHubIcon style={styles.icon} />
        <GitHubIcon style={styles.icon} />
        <GitHubIcon style={styles.icon} />
        <GitHubIcon style={styles.icon} />
      </div>
    </div>
  )
}

export default Skills
