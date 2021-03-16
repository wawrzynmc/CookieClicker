// -- imports
import React, { useState } from 'react'
import styled from 'styled-components';

import { Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

// -- internal components
import IconButton from '../../atoms/IconButton/IconButton';
import NavigationItems from '../../molecules/NavigationItems/NavigationItems';

// * -- COMPONENT
function SideDrawer() {
    const [state, setState] = useState({ right: false });

    const toggleDrawer = (anchor, open) => {
		setState({ [anchor]: open });
	};

    return (
        <>
			<IconButton edge="end" onClick={() => toggleDrawer('right', true)} disableHoverEffects>
				<Menu color="secondary" style={{ fontSize: 30 }} />
			</IconButton>
			<StyledDrawer
				transitionDuration={{ enter: 600, exit: 600 }}
				anchor="right"
				open={state.right}
				onClick={() => toggleDrawer('right', false)}
				classes={{ paper: 'paper' }}
			>
				<StyledDiv onClick={() => toggleDrawer('right', false)}>
					<NavigationItems sideDrawer />
				</StyledDiv>
			</StyledDrawer>
		</>
    )
}

// -- styled components
const StyledDiv = styled.div`
	height: 95%;
`;

const StyledDrawer = styled(({ ...props }) => <Drawer {...props} />)`
	& .paper {
		background-color: #FFF;
	}
`;

export default SideDrawer
