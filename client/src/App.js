// -- imports
import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import { Container, CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core';

// -- global styles
import { GlobalStyles, theme } from './assets/styles/GlobalStyles';

// -- internal components/imports
import Header from './components/organisms/Header/Header';
import Loader from './components/molecules/Loader/Loader';
import Dialog from './components/organisms/Dialog/Dialog';
import { checkAuthQuery } from './api/queries/queries';
import { CHECK_AUTH } from './api/queries/queries-keys';

// -- lazy loading
const Achievements = React.lazy(() => import('./components/pages/Achievements'));
const Home = React.lazy(() => import('./components/pages/Home'));
const Shop = React.lazy(() => import('./components/pages/Shop'));
const Authenticate = React.lazy(() => import('./components/pages/Authenticate'));
const Characters = React.lazy(() => import('./components/pages/Characters'));

// * -- COMPONENT
function App() {
    const location = useLocation();
    const { isError } = checkAuthQuery(CHECK_AUTH);

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
            <Route path="/authenticate" exact>
                <Authenticate />
            </Route>
            <Route path="/characters" exact>
                <Characters />
            </Route>
            <Redirect to="/home" />
        </Switch>
    );

    return (
        <ThemeProvider theme={responsiveFontSizes(theme)}>
            <Header />
            <StyledContainer component="main">
                <Suspense fallback={<Loader />}>
                    <GlobalStyles />
                    {isError && <Dialog type="error" />}
                    {routes}
                </Suspense>
            </StyledContainer>
            <CssBaseline />
        </ThemeProvider>
    );
}

// -- styled components
const StyledContainer = styled(({ ...props }) => <Container {...props} />)`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default App;
