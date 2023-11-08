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
  padding?: string
  customStyles?: object
}

const Grid: React.FC<GridProps> = ({
  children,
  desktopColumns,
  tabletColumns,
  mobileColumns,
  gap,
  maxWidth,
  padding,
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
      padding: padding,
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
  padding: '0px',
}
export default Grid
