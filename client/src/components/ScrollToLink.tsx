import React, { ReactNode } from 'react'

interface ScrollToLinkProps {
  scrollToOnClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  children: ReactNode
}

const ScrollToLink: React.FC<ScrollToLinkProps> = ({
  scrollToOnClick,
  children,
}) => {
  return (
    <div onClick={scrollToOnClick}>
      <p className="scroll-to-link">{children}</p>
    </div>
  )
}

export default ScrollToLink
