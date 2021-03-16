// -- imports
import React from 'react';
import styled, { css } from 'styled-components';

import { IconButton as MaterialIconButton } from '@material-ui/core';

// * -- COMPONENT
function IconButton({ children, edge, onClick, disableHoverEffects }) {
    return (
        <StyledIconButton
            edge={edge}
            onClick={onClick}
            disableRipple={true}
            disableHoverEffects={disableHoverEffects}
        >
            {children}
        </StyledIconButton>
    );
}

// -- styled components
const StyledIconButton = styled(({ ...props }) => <MaterialIconButton {...props} />)`
    && {
        ${({ disableHoverEffects }) =>
            disableHoverEffects &&
            css`
                &:hover {
                    background: transparent;
                }
            `}
    }
`;

export default IconButton
