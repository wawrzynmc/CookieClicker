// -- imports
import React from 'react';
import styled from 'styled-components';

import { IconButton as MaterialIconButton } from '@material-ui/core';

// * -- COMPONENT
function IconButton({ children, edge, onClick }) {
    return (
        <StyledIconButton
            edge={edge}
            onClick={onClick}
            disableRipple={true}
        >
            {children}
        </StyledIconButton>
    );
}

// -- styled components
const StyledIconButton = styled(({ ...props }) => <MaterialIconButton {...props} />)`
    && {
        &:hover {
            background: transparent;
        }
    }
`;

export default IconButton
