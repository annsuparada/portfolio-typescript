import { createTheme } from '@mui/material/styles'

export const primary = '#F58F7C'
export const secondary = '#D6D6D6'
export const error = '#cc0000'
export const warning = '#f39c12'
export const success = '#007f4f'
export const lightBackground = '#4F4F51'
export const darkBackground = '#2C2B30'
export const darkFont = '#2C2B30'
export const white = '#ffffff'
export const offWhite = '#e8e8e8'
export const logoColor = '#2C2B30'
export const pink = '#F2C4CE'

export const mobileView = '600px'
export const smallMobileView = '400px'
export const tabletView = '900px'
export const desktopView = '1440px'

export const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: error,
    },
    warning: {
      main: warning,
    },
    success: {
      main: success,
    },
  },
  typography: {
    fontFamily: ['Plus Jakarta Sans', 'serif'].join(','),
    h1: {
      fontFamily: 'Inter',
      fontSize: '3rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'Inter',
      fontSize: '1.75rem',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'Inter',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: 'Inter',
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1.5rem',
    },
    body2: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    subtitle1: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1.1rem',
    },
    subtitle2: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    caption: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    button: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    overline: {
      fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
  },
  components: {
    MuiImageListItemBar: {
      styleOverrides: {
        title: {
          fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
          fontSize: '1rem',
          fontWeight: 'bold',
        },
      },
    },
  },
})
