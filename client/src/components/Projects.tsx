import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projectData'
import { Grid } from '@mui/material'

const Projects: React.FC = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      //   maxWidth="1200px"
    >
      {projects.map((i) => (
        <ProjectCard
          imageUrl={i.imageUrl}
          alt={i.alt}
          projectName={i.projectName}
          projectDescription={i.projectDescription}
          tachStacks={i.tachStacks}
          projectLink={i.projectLink}
          gitHubLink={i.gitHubLink}
        />
      ))}
    </Grid>
  )
}

export default Projects
