import {
    Button,
    useMediaQuery,
    useTheme,
    Dialog as MaterialDialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Divider,
} from '@material-ui/core';
import { ErrorOutlineOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

function Dialog({ type, content }) {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        setOpen(false);
    };

    // -- set dialog type
    let dialogTitle, dialogContent;

    switch (type) {
        case 'error':
            dialogTitle = (
                <>
                    <ErrorOutlineOutlined fontSize="large" />
                    {'An error occured'}
                    <ErrorOutlineOutlined fontSize="large" />
                </>
            );
            dialogContent =
                content ||
                'Something has gone wrong, and because of this, some functionality of the application may not work properly. Please try again later.';
            break;

        default:
            break;
    }

    return (
        <MaterialDialog fullScreen={fullScreen} open={open} onClose={handleClose}>
            <StyledDialogTitle type={type}>{dialogTitle}</StyledDialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText>{dialogContent}</DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button
                    autoFocus
                    onClick={handleClose}
                    color="primary"
                    variant="outlined"
                    size="large"
                    style={{ fontSize: '0.8rem' }}
                >
                    Close
                </Button>
            </DialogActions>
        </MaterialDialog>
    );
}

const StyledDialogTitle = styled(({ type, ...props }) => <DialogTitle {...props} />)`
    && {
        ${(props) =>
            props.type === 'error' &&
            css`
                background-color: #f08080;
            `}
    }

    & h2 {
        display: flex;
        align-items: center;

        & svg {
            flex-grow: 1;
        }
    }
`;

export default Dialog;
