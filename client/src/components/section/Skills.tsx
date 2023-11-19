import React from 'react'
import {
  darkFont,
  desktopView,
  lightBackground,
  pink,
  primary,
  secondary,
} from '../../theme'
import Grid from '../Grid'
import { skills } from '../../data/projectData'

interface SkillsProps {
  targetId: string
}

const Skills: React.FC<SkillsProps> = ({ targetId }) => {
  const styles = {
    container: {
      backgroundColor: pink,
      width: '100%',
      padding: '20px 0 50px',
    },
    h1: {
      color: darkFont,
    },
    grid: {
      maxWidth: desktopView,
      margin: '0 auto',
      padding: '10px',
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '10px',
      justifyItems: 'center',
      alignItems: 'end',
    },
    icon: {
      width: '100px',
    },
    p: {
      margin: '10px 0',
      fontSize: '25px',
      fontWeight: 'bold',
      color: darkFont,
      textAlign: 'center' as 'center',
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
        customStyles={styles.grid}
      >
        {skills.map((i, index) => (
          <div key={index}>
            <img src={i.src} alt={i.alt} style={styles.icon} />
            <p style={styles.p}>{i.alt}</p>
          </div>
        ))}
      </Grid>
    </div>
  )
}

export default Skills
