// -- imports
import React, { Suspense } from 'react';
import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';

// -- global styles
import { GlobalStyles, theme } from './assets/styles/GlobalStyles';
import Loader from './components/molecules/Loader/Loader';

// -- internal components
import Header from './components/organisms/Header/Header';
const Achievements = React.lazy(() => import('./components/pages/Achievements'));
const Home = React.lazy(() => import('./components/pages/Home'));
const Shop = React.lazy(() => import('./components/pages/Shop'));

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
                <Suspense fallback={<Loader />}>
                    <GlobalStyles />
                    {routes}
                </Suspense>
            </main>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;
