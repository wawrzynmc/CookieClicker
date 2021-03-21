// -- imports
import React, { Suspense } from 'react';
import { Container, CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// -- global styles
import { GlobalStyles, theme } from './assets/styles/GlobalStyles';
import Loader from './components/molecules/Loader/Loader';

// -- internal components
import Header from './components/organisms/Header/Header';
import { useDispatch } from 'react-redux';
import { checkAuth } from './api/users-api';
import { useQuery } from 'react-query';
import { login, logout } from './store/actions';
import Dialog from './components/organisms/Dialog/Dialog';
const Achievements = React.lazy(() => import('./components/pages/Achievements'));
const Home = React.lazy(() => import('./components/pages/Home'));
const Shop = React.lazy(() => import('./components/pages/Shop'));
const Authenticate = React.lazy(() => import('./components/pages/Authenticate'));

const CheckAuthFetch = () => {
    const dispatch = useDispatch();
    const { data, error } = useQuery('checkAuth', checkAuth);

    if (data) {
        console.log(data);
        if (data.currentUser) {
            dispatch(login());
        } else {
            dispatch(logout());
        }
    }

    return { error };
};

// * -- COMPONENT
function App() {
    const location = useLocation();
    const { error } = CheckAuthFetch();

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
            <Redirect to="/home" />
        </Switch>
    );

    return (
        <ThemeProvider theme={responsiveFontSizes(theme)}>
            <Header />
            <StyledContainer component="main">
                <Suspense fallback={<Loader />}>
                    <GlobalStyles />
                    {error && <Dialog type="error" />}
                    {routes}
                </Suspense>
            </StyledContainer>
            <CssBaseline />
        </ThemeProvider>
    );
}

const StyledContainer = styled(({ ...props }) => <Container {...props} />)`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default App;
