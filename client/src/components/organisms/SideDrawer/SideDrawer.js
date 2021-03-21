// -- imports
import React, { useState } from 'react';
import styled from 'styled-components';
import { Drawer, useTheme } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

// -- internal components/imports
import IconButton from '../../atoms/IconButton/IconButton';
import NavigationItems from '../../molecules/NavigationItems/NavigationItems';

// * -- COMPONENT
function SideDrawer() {
    const theme = useTheme();
    const [state, setState] = useState({ right: false });

    const toggleDrawer = (anchor, open) => {
        setState({ [anchor]: open });
    };

    return (
        <>
            <IconButton edge="end" onClick={() => toggleDrawer('right', true)}>
                <Menu color="secondary" style={{ fontSize: 30 }} />
            </IconButton>
            <StyledDrawer
                transitionDuration={{ enter: 600, exit: 600 }}
                anchor="right"
                open={state.right}
                onClick={() => toggleDrawer('right', false)}
            >
                <StyledDiv
                    onClick={() => toggleDrawer('right', false)}
                    style={{ backgroundColor: theme.palette.primary.main }}
                >
                    <NavigationItems sideDrawer />
                </StyledDiv>
            </StyledDrawer>
        </>
    );
}

// -- styled components
const StyledDiv = styled.div`
    height: 100%;
`;

const StyledDrawer = styled(({ theme, ...props }) => <Drawer {...props} />)`
    && {
    }
`;

export default SideDrawer;
