import React from 'react'
import { desktopView, lightBackground, secondary } from '../../theme'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import JavascriptIcon from '@mui/icons-material/Javascript'
import GitHubIcon from '@mui/icons-material/GitHub'
import Grid from '../Grid'

interface SkillsProps {
  targetId: string
}

const Skills: React.FC<SkillsProps> = ({ targetId }) => {
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
    <div style={styles.container} id={targetId}>
      <h1 style={styles.h1}>Skills</h1>
      <Grid
        desktopColumns={6}
        tabletColumns={5}
        mobileColumns={3}
        padding="10px"
      >
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
      </Grid>
    </div>
  )
}

export default Skills
