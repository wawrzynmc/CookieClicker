// -- imports
import React from 'react';
import styled, { css } from 'styled-components';
import { List } from '@material-ui/core';
import {
    StoreMallDirectoryOutlined,
    FitnessCenterOutlined,
    HomeOutlined,
} from '@material-ui/icons';

// -- internal components
import NavigationItem from '../../atoms/NavigationItem/NavigationItem';

// -- navigation items
const navItems = [
    {
        key: 'home',
        title: `home`,
        path: `/home`,
        icon: <HomeOutlined color="secondary" style={{ fontSize: '2rem' }} />,
    },
    {
        key: 'achivements',
        title: `achivements`,
        path: `/achivements`,
        icon: <StoreMallDirectoryOutlined color="secondary" style={{ fontSize: '2rem' }} />,
    },
    {
        key: 'shop',
        title: `shop`,
        path: `/shop`,
        icon: <FitnessCenterOutlined color="secondary" style={{ fontSize: '2rem' }} />,
    },
];

// * -- COMPONENT
function NavigationItems({ sideDrawer }) {
    const inSideDrawer = !!sideDrawer;
    return (
        <StyledList component="nav" sideDrawer={sideDrawer}>
            {navItems
                .filter(({ key }) => {
                    if (!inSideDrawer && key === 'home') return false;
                    else return true;
                })
                .map(({ key, title, path, icon }) => (
                    <NavigationItem
                        key={key}
                        title={title}
                        path={path}
                        icon={icon}
                        inSideDrawer={inSideDrawer}
                    />
                ))}
        </StyledList>
    );
}

// -- styled components
const StyledList = styled(({ ...props }) => <List {...props} />)`
    && {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 20px;

        font-size: 2rem;

        ${(props) =>
            props.sideDrawer &&
            css`
                flex-direction: column;
                justify-content: space-evenly;
                width: auto;
                height: 100%;
            `}
    }
`;

export default NavigationItems;
