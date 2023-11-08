import React from 'react'
import Button from '@mui/material/Button'
import {
  Box,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Modal,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

interface ProjectCardProps {
  imageUrl: string
  alt: string
  projectName: string
  projectDescription: string
  tachStacks: string
  projectLink: string
  gitHubLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  alt,
  projectName,
  projectDescription,
  tachStacks,
  projectLink,
  gitHubLink,
}) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const styles = {
    modal: {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
    },
  }
  return (
    <div>
      <ImageListItem>
        <img srcSet={imageUrl} src={imageUrl} alt={alt} loading="lazy" />
        <ImageListItemBar
          title={projectName}
          sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 1)' }}
              aria-label={`info about ${projectName}`}
              onClick={handleOpen}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={styles.modal}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default ProjectCard
