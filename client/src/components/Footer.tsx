import React from 'react'
import { darkBackground, secondary } from '../theme'
import Grid from './Grid'
import ScrollToLink from './ScrollToLink'

const Footer: React.FC = () => {
  const styles = {
    container: {
      backgroundColor: darkBackground,
      minHeight: '20vh',
    },
  }
  return (
    <div style={styles.container}>
      <Grid desktopColumns={3} padding="20px">
        <div>
          <h2 style={{ color: secondary }}>LOGO</h2>
        </div>
        <div>
          <ScrollToLink scrollToOnClick={() => console.log('test')}>
            Home
          </ScrollToLink>
          <ScrollToLink scrollToOnClick={() => console.log('test')}>
            About
          </ScrollToLink>
          <ScrollToLink scrollToOnClick={() => console.log('test')}>
            Portfolio
          </ScrollToLink>
          <ScrollToLink scrollToOnClick={() => console.log('test')}>
            Contact
          </ScrollToLink>
        </div>
        <div>contact</div>
      </Grid>
    </div>
  )
}

export default Footer
