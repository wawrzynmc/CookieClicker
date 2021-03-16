// ---- local imports
import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core';
import { deepPurple, pink } from '@material-ui/core/colors';

// * -- COMPONENTS
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    /* This should go to layout component */
    main {
        height: 80vh;
        overflow: auto;
        flex-grow: 1;
    }
`;

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: pink,
    },
    typography: {
        fontSize: 10,
        fontFamily: ['DotGothic16', 'Roboto', 'Helvetica', 'sans-serif'].join(','),
        h1: {
            fontFamily: ['Bungee', 'Roboto', 'Helvetica', 'sans-serif'].join(','),
            fontSize: '2.8rem',
            letterSpacing: 1,
        },
        h2: {
            fontFamily: ['Bungee', 'Roboto', 'Helvetica', 'sans-serif'].join(','),
            fontSize: '2.5rem',
        },
        h3: {
            fontFamily: ['Bungee', 'Roboto', 'Helvetica', 'sans-serif'].join(','),
            fontSize: '2rem',
        },
    },
});

// -- responsive font sizes

export { GlobalStyles, theme };
