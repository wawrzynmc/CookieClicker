// -- imports
import React from 'react';
import styled from 'styled-components';
import { Typography, useTheme } from '@material-ui/core';

// * -- COMPONENT
function ValueLabel({ children, value }) {
    const theme = useTheme();

    return (
        <>
            <StyledLabel variant="h4" align="center">
                {children} <StyledValue theme={theme}>{value}</StyledValue>
            </StyledLabel>
        </>
    );
}

// -- styled components
const StyledLabel = styled(({ ...props }) => <Typography {...props} />)`
    margin: 30px 0px;
    text-transform: uppercase;
    font-weight: bold;

    @media (max-width: 400px) {
        margin: 15px 0px;
    }
`;

const StyledValue = styled.span`
    color: ${(props) => props.theme.palette.secondary.main};
`;

export default ValueLabel;
