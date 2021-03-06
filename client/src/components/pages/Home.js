// -- imports
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Button, Grid, Typography, useTheme } from '@material-ui/core';
import { RotateLeftOutlined, RotateRightOutlined } from '@material-ui/icons';

// -- internal components/imports
import Cookie from '../atoms/Cookie/Cookie';
import ValueLabel from '../atoms/ValueLabel/ValueLabel';
import { useDispatch, useSelector } from 'react-redux';
import { clearPoints } from '../../store/actions';

// * -- COMPONENT
function Home() {
    const theme = useTheme();
    const location = useLocation();
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const {
        cookie: { points, level },
    } = useSelector((state) => state);

    useEffect(() => {
        if (location.state?.success) {
            enqueueSnackbar(location.state.message, {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                },
            });

            const locationState = { ...location.state };
            delete locationState.success;
            delete locationState.message;
            history.replace({ state: locationState });
        }
    }, [enqueueSnackbar, history, location.state]);

    return (
        <StyledContainerGrid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
        >
            <Grid container item direction="row" justify="center" alignItems="center">
                <Typography variant="h4" align="center">
                    Click on the cookie to earn some cookie-money💸!
                </Typography>
            </Grid>
            <StyledCookieGrid
                container
                item
                direction="row"
                justify="space-around"
                alignItems="center"
                theme={theme}
            >
                <ValueLabel value={level}>Level</ValueLabel>
                <Cookie />
                <ValueLabel value={points}>Points</ValueLabel>
            </StyledCookieGrid>
            <Grid container item direction="row" justify="center" alignItems="center">
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<RotateLeftOutlined />}
                    size="large"
                    disableRipple={true}
                    endIcon={<RotateRightOutlined />}
                    style={{ fontSize: '1.2rem' }}
                    onClick={() => dispatch(clearPoints())}
                    disabled={points === 0}
                >
                    reset points
                </Button>
            </Grid>
        </StyledContainerGrid>
    );
}

// -- styled components
const StyledContainerGrid = styled(({ ...props }) => <Grid {...props} />)`
    && {
        height: 100%;
    }
`;

const StyledCookieGrid = styled(({ theme, ...props }) => <Grid {...props} />)`
    && {
        max-width: 960px;
    }

    & h4 {
        writing-mode: vertical-rl;
        text-orientation: upright;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
        flex-direction: column;

        & h4 {
            writing-mode: horizontal-tb;
            text-orientation: sideways;
        }
    }
`;

export default Home;
