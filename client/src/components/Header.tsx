import { Box, Button } from '@mui/material'
import React from 'react'
import { darkBackground, primary, secondary } from '../theme'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'

const styles = {
  header: {
    width: '100%',
    height: '95vh',
    backgroundColor: darkBackground,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    width: 800,
    height: 300,
    padding: 2,
    backgroundColor: darkBackground,
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
  h1: {
    color: secondary,
    fontSize: '6rem',
    margin: '0',
  },
  h2: {
    color: secondary,
    fontSize: '1.8rem',
    textAlign: 'center' as 'center',
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
      <div style={styles.header}>
        <Box sx={styles.innerBox}>
          <h1 style={styles.h1}>Ann Keller</h1>
          <h2 style={styles.h2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </h2>

          <Button
            variant="contained"
            size="large"
            style={{ color: darkBackground, fontWeight: 'bold' }}
          >
            View My Work
          </Button>
        </Box>
        <Box sx={styles.innerBox}>
          <LaptopMacIcon style={{ fontSize: '600px', color: primary }} />
        </Box>
      </div>
    </div>
  )
}

export default Header
