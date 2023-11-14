import React from 'react'
import { Button } from '@mui/material'
import { darkBackground } from '../theme'

interface PrimaryButtonProps {
  text: string
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      variant="contained"
      size="large"
      style={{ color: darkBackground, fontWeight: 'bold' }}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default PrimaryButton
