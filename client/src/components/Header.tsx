import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const styles = {
  header: {
    width: '100%',
    height: 500,
    backgroundColor: 'primary.dark',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    width: 800,
    height: 300,
    padding: 2,
    backgroundColor: 'primary.dark',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBox: {
    width: '100%',
    height: 500,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  innerBottomBox: {
    maxWidth: 1000,
    padding: 2,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

const Header: React.FC = () => {
  return (
    <div>
      <Box sx={styles.header}>
        <Box sx={styles.innerBox}>
          <Typography variant="h2" fontWeight="bold" color="white">
            Ann Keller
          </Typography>
          <Typography variant="h3" mt={1} color="white">
            Full-Stack Web Developer
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.bottomBox}>
        <Box sx={styles.innerBottomBox}>
          <Typography variant="h2" fontWeight="bold" mt={2}>
            About
          </Typography>
          <Typography variant="body1" paragraph fontSize={20} mt={2} mb={3}>
            I'm a Full-Stack Developer with 3+ years of hands-on experience,
            dedicated to designing, developing, and implementing innovative
            applications and solutions using a diverse range of technologies and
            programming languages. My mission is to deliver exceptional,
            functional, and responsive web applications that exceed client
            expectations and drive their success.
          </Typography>
          <Button variant="contained" size="large">
            View My Works
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default Header
