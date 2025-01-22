import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#2A9D8F',
    secondary: '#E9C46A',
    dark: '#264653',
    light: '#F4F4F4',
    white: '#FFFFFF'
  },
  fonts: {
    main: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif"
  }
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
  }
`; 