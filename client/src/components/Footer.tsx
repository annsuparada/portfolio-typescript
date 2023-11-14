import React from 'react'
import { darkBackground, secondary } from '../theme'
import Grid from './Grid'
import ScrollToLink from './ScrollToLink'

interface FooterProps {
  scrollToHome: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  scrollToAbout: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  scrollToSkills: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  scrollToPortfolio: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  scrollToContact: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const styles = {
    container: {
      backgroundColor: darkBackground,
      minHeight: '20vh',
    },
    infoContainer: {
      display: 'grid',
      alignContent: 'center',
      gridTemplateColumns: '1fr 4fr',
      padding: '40px 10px',
    },
    icon: {
      fontSize: '3rem',
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
          <ScrollToLink scrollToOnClick={props.scrollToHome}>Home</ScrollToLink>
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
        </div>
        <div></div>
      </Grid>
    </div>
  )
}

export default Footer
