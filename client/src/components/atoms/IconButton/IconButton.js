// -- imports
import React from 'react';
import styled from 'styled-components';
import { IconButton as MaterialIconButton, Popover, Typography } from '@material-ui/core';

// * -- COMPONENT
function IconButton({ children, edge, onClick, withPopover = false, popoverContent }) {
    // ---- dealing with anchor for popover
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = !!anchorEl;

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <StyledIconButton
                edge={edge}
                onClick={onClick}
                disableRipple={true}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {children}
            </StyledIconButton>
            {withPopover && (
                <Popover
                    style={{ pointerEvents: 'none' }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="left"
                        style={{ padding: '10px' }}
                    >
                        {popoverContent}
                    </Typography>
                </Popover>
            )}
        </>
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

export default IconButton;
