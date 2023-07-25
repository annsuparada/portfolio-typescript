import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface ProjectCardProps {
  imageUrl: string
  alt: string
  projectName: string
  projectDescription: string
  tachStacks: string
  projectLink: string
  gitHubLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <Card sx={{ maxWidth: 345, padding: 1, margin: 1 }}>
      <CardMedia
        component="img"
        alt={props.alt}
        // height="180"
        image={props.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          {props.projectDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          {props.tachStacks}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.projectLink}>
          Project
        </Button>
        <Button size="small" href={props.gitHubLink}>
          GitHub
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard
