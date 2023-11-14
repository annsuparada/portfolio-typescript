import { Box, Typography } from '@mui/material'
import React from 'react'
import { desktopView } from '../../theme'
import Grid from '../Grid'
import PrimaryButton from '../PrimaryButton'

interface AboutProps {
  targetId: string
  scrollToPortfolio: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const About: React.FC<AboutProps> = ({ targetId, scrollToPortfolio }) => {
  const styles = {
    container: {
      maxWidth: desktopView,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      padding: '20px',
      minHeight: '40vh',
    },
    imgContainer: {
      textAlign: 'center' as 'center',
    },
    img: {
      width: '300px',
      borderRadius: '50%',
      margin: '0 auto',
    },
  }
  return (
    <div id={targetId}>
      <h1>About</h1>
      <Grid padding="20px 10px 30px">
        <div style={styles.imgContainer}>
          <img
            src="https://res.cloudinary.com/dejr86qx8/image/upload/v1597962282/war%20stories/ann_itko5i.png"
            alt="Ann Keller"
            style={styles.img}
          />
        </div>
        <Box sx={{ marginTop: '15px' }}>
          <Typography variant="body1" paragraph fontSize={20} mt={2} mb={3}>
            I'm a Full-Stack Developer with 3+ years of hands-on experience,
            dedicated to designing, developing, and implementing innovative
            applications and solutions using a diverse range of technologies and
            programming languages. My mission is to deliver exceptional,
            functional, and responsive web applications that exceed client
            expectations and drive their success.
          </Typography>
          <PrimaryButton text="view my work" onClick={scrollToPortfolio} />
        </Box>
      </Grid>
    </div>
  )
}

export default About
