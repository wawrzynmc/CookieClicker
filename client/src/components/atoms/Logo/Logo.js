import React from 'react';
import styled from 'styled-components';
import { Typography, useTheme } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';

function Logo() {
    const theme = useTheme();

    return (
        <IconButton edge="start">
            <StyledTypography
                component={NavLink}
                to="/home"
                variant="h1"
                color="textPrimary"
                theme={theme}
            >
                C<StyledSpan>🍪</StyledSpan>
                <StyledSpan>🍪</StyledSpan>kie Clicker
            </StyledTypography>
        </IconButton>
    );
}

// -- styled components
const StyledTypography = styled(({ ...props }) => <Typography {...props} />)`
    && {
        text-decoration: none;

        @media (max-width: 400px) {
            font-size: 1.4rem;
        }
    }
`;

const StyledSpan = styled.span`
    font-size: 0.6em;
`;

export default Logo;
