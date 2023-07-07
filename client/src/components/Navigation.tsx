import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

interface LinkTabProps {
  label?: string
  href?: string
}

const LinkTab: React.FC<LinkTabProps> = (props) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault()
  }

  return <Tab component="a" onClick={handleClick} {...props} />
}

const Navigation: React.FC = (props) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav-tabs"
        centered
      >
        <LinkTab label="About" href="/" />
        <LinkTab label="Portfolio" href="/" />
        <LinkTab label="Blog" href="/" />
        <LinkTab label="Contact" href="/" />
      </Tabs>
    </Box>
  )
}

export default Navigation
