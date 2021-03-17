import React from 'react';
import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

function Button({ children, variant, color, startIcon }) {
    return <StyledButton variant={variant} color={color} startIcon={startIcon}>{children}</StyledButton>;
}

// -- styled components
const StyledButton = styled(({ ...props }) => <MaterialButton {...props} />)`
    && {
        &:hover {
            background: transparent;
        }
    }
`;

export default Button;
