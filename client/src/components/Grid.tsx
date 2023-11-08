import { useMediaQuery } from '@mui/material'
import React, { ReactNode } from 'react'
import { desktopView, mobileView, tabletView } from '../theme'

interface GridProps {
  children: ReactNode
  desktopColumns?: number
  tabletColumns?: number
  mobileColumns?: number
  gap?: string
  maxWidth?: string
  customStyles?: object
}

const Grid: React.FC<GridProps> = ({
  children,
  desktopColumns,
  tabletColumns,
  mobileColumns,
  gap,
  maxWidth,
  customStyles,
}) => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)

  const columns = isMobile
    ? mobileColumns
    : isTablet
    ? tabletColumns
    : desktopColumns

  const styles = {
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: gap,
      maxWidth: maxWidth,
      margin: '0 auto',
      height: '100%',
      ...customStyles,
    },
  }
  return <div style={styles.gridContainer}>{children}</div>
}

Grid.defaultProps = {
  desktopColumns: 2,
  tabletColumns: 2,
  mobileColumns: 1,
  gap: '10px',
  maxWidth: desktopView,
}
export default Grid
