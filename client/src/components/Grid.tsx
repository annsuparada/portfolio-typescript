import { useMediaQuery } from '@mui/material'
import React, { ReactNode } from 'react'
import { desktopView, mobileView, smallMobileView, tabletView } from '../theme'

interface GridProps {
  children: ReactNode
  desktopColumns?: number
  tabletColumns?: number
  mobileColumns?: number
  smallMobileColumns?: number
  gap?: string
  justifyItems?: string
  maxWidth?: string
  padding?: string
  customStyles?: object
}

const Grid: React.FC<GridProps> = ({
  children,
  desktopColumns,
  tabletColumns,
  mobileColumns,
  smallMobileColumns,
  gap,
  justifyItems,
  maxWidth,
  padding,
  customStyles,
}) => {
  const isTablet = useMediaQuery(`(max-width:${tabletView})`)
  const isMobile = useMediaQuery(`(max-width:${mobileView})`)
  const isSmallMobile = useMediaQuery(`(max-width:${smallMobileView})`)

  const getResponsiveColumns = () => {
    if (isMobile) {
      return mobileColumns
    } else if (isSmallMobile) {
      return smallMobileColumns
    } else if (isTablet) {
      return tabletColumns
    } else {
      return desktopColumns
    }
  }

  const styles = {
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: `repeat(${getResponsiveColumns()}, 1fr)`,
      gap: gap,
      maxWidth: maxWidth,
      margin: '0 auto',
      padding: padding,
      justifyItems: justifyItems,
      ...customStyles,
    },
  }
  return <div style={styles.gridContainer}>{children}</div>
}

Grid.defaultProps = {
  desktopColumns: 2,
  tabletColumns: 2,
  mobileColumns: 1,
  smallMobileColumns: 1,
  gap: '10px',
  justifyItems: 'center',
  maxWidth: desktopView,
  padding: '0px',
}
export default Grid
