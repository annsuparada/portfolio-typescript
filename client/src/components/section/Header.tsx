import { Box } from '@mui/material'
import React from 'react'
import { darkBackground, primary, secondary } from '../../theme'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import PrimaryButton from '../PrimaryButton'
import Grid from '../Grid'

const styles = {
  header: {
    width: '100%',
    height: '95vh',
    backgroundColor: darkBackground,
  },
  innerBox: {
    padding: 2,
    backgroundColor: darkBackground,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
}

const Header: React.FC = () => {
  return (
    <div>
      <div style={styles.header}>
        <Grid>
          <Box sx={styles.innerBox}>
            <h1 style={styles.h1}>Ann Keller</h1>
            <h2 style={styles.h2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </h2>

            <PrimaryButton text="view my work" />
          </Box>
          <Box sx={styles.innerBox}>
            <LaptopMacIcon style={{ fontSize: '300px', color: primary }} />
          </Box>
        </Grid>
      </div>
    </div>
  )
}

export default Header
