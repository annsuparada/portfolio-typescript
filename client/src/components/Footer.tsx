import React from 'react'
import Link from '@mui/material/Link'
import { darkBackground, secondary } from '../theme'
import Grid from './Grid'
import ScrollToLink from './ScrollToLink'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import { ScrollToOnClick } from '../types'

const Footer: React.FC<ScrollToOnClick> = (props: ScrollToOnClick) => {
  const styles = {
    container: {
      backgroundColor: darkBackground,
    },
    infoContainer: {
      display: 'grid',
      alignContent: 'center',
      gridTemplateColumns: '1fr 1fr 1fr',
      maxWidth: '120px',
      padding: '15px',
      margin: '0 auto',
    },
    icon: {
      fontSize: '1.7rem',
      color: secondary,
    },
    p: {
      margin: '5px',
    },
  }
  return (
    <div style={styles.container}>
      <Grid desktopColumns={3} padding="20px">
        <div>
          <h2 style={{ color: secondary }}>LOGO</h2>
        </div>
        <div>
          <div style={styles.infoContainer}>
            <Link
              href="https://www.linkedin.com/in/ann-suparada/"
              target="_blank"
            >
              <LinkedInIcon style={styles.icon} />
            </Link>
            <Link href="https://github.com/annsuparada" target="_blank">
              <GitHubIcon style={styles.icon} />
            </Link>
            <Link href="mailto:ann.suparada@gmail.com.com">
              <EmailIcon style={styles.icon} />
            </Link>
          </div>

          <Grid desktopColumns={5} tabletColumns={5} mobileColumns={1}>
            <ScrollToLink scrollToOnClick={props.scrollToHome}>
              Home
            </ScrollToLink>
            <ScrollToLink scrollToOnClick={props.scrollToAbout}>
              About
            </ScrollToLink>
            <ScrollToLink scrollToOnClick={props.scrollToSkills}>
              Skills
            </ScrollToLink>
            <ScrollToLink scrollToOnClick={props.scrollToPortfolio}>
              Portfolio
            </ScrollToLink>
            <ScrollToLink scrollToOnClick={props.scrollToContact}>
              Contact
            </ScrollToLink>
          </Grid>
        </div>
        <p style={{ color: secondary, textAlign: 'center' }}>
          Lorem Ipsum is simply dummy text <br />
          of the printing and typesetting industry.
        </p>
      </Grid>
    </div>
  )
}

export default Footer
