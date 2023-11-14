import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { ScrollToOnClick } from '../types'
import { desktopView } from '../theme'

const Navigation: React.FC<ScrollToOnClick> = (props: ScrollToOnClick) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: desktopView,
        margin: '0 auto',
      }}
    >
      <h2 onClick={props.scrollToHome} style={{ margin: '10px' }}>
        LOGO
      </h2>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav-tabs"
        centered
      >
        <Tab label="About" onClick={props.scrollToAbout} component="a" />
        <Tab label="Skills" onClick={props.scrollToSkills} component="a" />
        <Tab label="Porfolio" onClick={props.scrollToPortfolio} component="a" />
        <Tab label="Contact" onClick={props.scrollToContact} component="a" />
      </Tabs>
    </Box>
  )
}

export default Navigation
