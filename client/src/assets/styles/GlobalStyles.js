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

    body {
        height: 100vh;
	    background: linear-gradient(to bottom, #e73c7e, #673ab7);
    }

    main {
        height: 85vh;
        overflow: auto;
        flex-grow: 1;
    }

    // -- scrollbar styles
    // ---- The emerging W3C standard that is currently Firefox-only
    * {
        scrollbar-width: thin;
        scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
    }

    // ---- Works on Chrome/Edge/Safari
    *::-webkit-scrollbar {
        width: 5px;
    }
    *::-webkit-scrollbar-track {
        background: transparent;
    }
    *::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.7);
        border-radius: 20px;
        border: transparent;
    }
`;

// * -- THEME
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
        h4: {
            fontSize: '1.8rem',
        },
        h5: {
            fontSize: '1.6rem',
        },
        h6: {
            fontSize: '1.4rem',
        },
        body1: {
            fontSize: '1.2rem',
            letterSpacing: '0.6px',
        },
        body2: {
            fontSize: '1rem',
            letterSpacing: '0.6px',
        },
    },
});

export { GlobalStyles, theme };
