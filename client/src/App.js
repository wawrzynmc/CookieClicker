// -- imports
import React from 'react';
import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';

// -- global styles
import { GlobalStyles, theme } from './assets/styles/GlobalStyles';

// -- internal components
import Header from './components/organisms/Header/Header';
import Achievements from './components/pages/Achievements';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';


// * -- COMPONENT
function App() {
    const location = useLocation();

    const routes = (
            <Switch location={location} key={location.pathname}>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/achivements" exact>
                    <Achievements />
                </Route>
                <Route path="/shop" exact>
                    <Shop />
                </Route>
                <Redirect to="/home" />
            </Switch>
    );

    return (
        <ThemeProvider theme={responsiveFontSizes(theme)}>
            <Header />
            <main>
                <GlobalStyles />
                {routes}
            </main>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;
