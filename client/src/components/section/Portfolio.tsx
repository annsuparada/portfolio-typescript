import React from 'react'
import ProjectCard from '../ProjectCard'
import { projects } from '../../data/projectData'
import Grid from '../Grid'

interface PortfolioProps {
  targetId: string
}

const Portfolio: React.FC<PortfolioProps> = ({ targetId }) => {
  const styles = {
    constainer: {
      padding: '20px 10px 30px',
    },
  }
  return (
    <div style={styles.constainer} id={targetId}>
      <h1>Portfolio</h1>
      <Grid desktopColumns={3} padding="10px">
        {projects.map((i, index) => (
          <ProjectCard
            key={index}
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
    </div>
  )
}

export default Portfolio
