import React from 'react'
import { styled } from '@mui/material'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LanguageIcon from '@mui/icons-material/Language'

interface ProjectCardProps {
  imageUrl: string
  alt: string
  projectName: string
  projectDescription: string
  tachStacks: string
  projectLink: string
  gitHubLink?: string
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  alt,
  projectName,
  projectDescription,
  tachStacks,
  projectLink,
  gitHubLink,
}) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <div>
      <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)' }}>
        <CardMedia component="img" image={imageUrl} alt={alt} />
        <CardContent>
          <h5 style={{ textAlign: 'left', margin: '5px' }}>{projectName}</h5>
          <p>{projectDescription}</p>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="link" href={projectLink} target="_blank">
            <LanguageIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <p>{tachStacks}</p>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
}

export default ProjectCard
