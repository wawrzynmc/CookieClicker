// -- imports
import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Hidden, Grid } from '@material-ui/core';

// -- internal components
import NavigationItems from '../../molecules/NavigationItems/NavigationItems';
import SideDrawer from '../SideDrawer/SideDrawer';
import Logo from '../../atoms/Logo/Logo';

// * -- COMPONENT
function Header() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <StyledGrid container justify="space-between">
                    <Logo />

                    <Hidden smDown>
                        <NavigationItems sideDrawer={false} />
                    </Hidden>

                    <Hidden mdUp>
                        <SideDrawer />
                    </Hidden>
                </StyledGrid>
            </Toolbar>
        </AppBar>
    );
}

// -- styled components
const StyledGrid = styled(({ ...props }) => <Grid {...props} />)`
    && {
        flex-wrap: nowrap;
    }
`;

export default Header;