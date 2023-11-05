import React from 'react'
import { Button } from '@mui/material'
import { darkBackground } from '../theme'

interface PrimaryButtonProps {
  text: string
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
  return (
    <Button
      variant="contained"
      size="large"
      style={{ color: darkBackground, fontWeight: 'bold' }}
    >
      {text}
    </Button>
  )
}

export default PrimaryButton
