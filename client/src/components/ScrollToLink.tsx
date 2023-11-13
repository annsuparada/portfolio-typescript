import React, { ReactNode } from 'react'
import { secondary } from '../theme'

interface ScrollToLinkProps {
  scrollToOnClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  children: ReactNode
}

const ScrollToLink: React.FC<ScrollToLinkProps> = ({
  scrollToOnClick,
  children,
}) => {
  const style = {
    color: secondary,
    margin: '5px',
  }
  return (
    <div onClick={scrollToOnClick}>
      <p className="scroll-to-link">{children}</p>
    </div>
  )
}

export default ScrollToLink
