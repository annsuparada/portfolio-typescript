import React from 'react'
import Grid from '../Grid'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import { darkFont, primary } from '../../theme'
import { Link } from 'react-router-dom'

interface ContactProps {
  targetId: string
}

const Contact: React.FC<ContactProps> = ({ targetId }) => {
  const styles = {
    container: {
      margin: '0 10px 100px',
    },
    grid: {
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)',
      alignContent: 'center',
    },
    leftContainer: {
      backgroundColor: primary,
      padding: '40px 10px',
    },
    infoContainer: {
      display: 'grid',
      alignContent: 'center',
      gridTemplateColumns: '1fr 4fr',
      padding: '40px 10px',
    },
    icon: {
      fontSize: '3rem',
      color: darkFont,
    },
    h5: {
      textAlign: 'left' as 'left',
      margin: '15px 0',
    },
  }
  return (
    <div style={styles.container} id={targetId}>
      <h1>Contact</h1>
      <Grid maxWidth="1000px" customStyles={styles.grid}>
        <div style={styles.leftContainer}>
          <h2>Let's Conect</h2>
          <p style={{ textAlign: 'center' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <div style={styles.infoContainer}>
            <Link to="/">
              <LinkedInIcon style={styles.icon} />
            </Link>
            <h5 style={styles.h5}>Ann Keller</h5>
            <Link to="/">
              <GitHubIcon style={styles.icon} />
            </Link>
            <h5 style={styles.h5}>annsuparada</h5>
            <Link to="/">
              <EmailIcon style={styles.icon} />
            </Link>
            <h5 style={styles.h5}>ann.suparada@gmail.com</h5>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default Contact
