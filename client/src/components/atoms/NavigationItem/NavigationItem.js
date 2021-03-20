// -- imports
import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, useTheme } from '@material-ui/core';

// * -- COMPONENT
function NavigationItem({ key, title, path, icon, inSideDrawer }) {
    const theme = useTheme();
    const location = useLocation();

    return (
        <StyledListItem
            theme={theme}
            disableRipple
            button
            alignItems="center"
            key={key}
            component={NavLink}
            to={path}
            exact={true}
            selected={location.pathname === path}
            inSideDrawer={inSideDrawer}
        >
            <StyledListItemIcon>{icon && icon}</StyledListItemIcon>
            {title && (
                <ListItemText
                    primary={title}
                    primaryTypographyProps={{ color: 'textPrimary', variant: 'h3' }}
                    style={{ textTransform: 'uppercase', textAlign: 'center' }}
                />
            )}
        </StyledListItem>
    );
}

// -- styled components
const StyledListItem = styled(({ inSideDrawer, ...props }) => <ListItem {...props} />)`
    && {
        width: ${(props) => (props.inSideDrawer ? '100%' : 'auto')};
    }

    & span,
    & svg {
        transition: color 0.7s;
    }

    & span::after {
        display: block;
        width: 0;
        height: 3px;

        content: '';
        background-color: ${(props) => props.theme.palette.secondary.dark};
        transition: width 0.3s linear;
    }

    &:hover,
    &:active,
    &.active {
        span::after {
            width: 100%;
            background-color: ${(props) => props.theme.palette.text.dark};
        }

        svg {
            color: black;
        }
    }
`;

const StyledListItemIcon = styled(({ ...props }) => <ListItemIcon {...props} />)`
    && {
        justify-content: center;
        min-width: fit-content;
        padding-right: 10px;
    }
`;

export default NavigationItem;
