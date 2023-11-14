export interface ScrollToOnClick {
  scrollToHome: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  scrollToAbout: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  scrollToSkills: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  scrollToPortfolio: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  scrollToContact: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
