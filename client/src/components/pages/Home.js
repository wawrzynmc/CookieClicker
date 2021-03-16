import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Cookie from '../atoms/Cookie/Cookie';

function Home() {
    return (
        <StyledGrid container>
            <Grid container item xs={12} justify="center" alignItems="center">
                <Typography variant="h4" align="center">
                    Click on the cookie to earn some cookie-money💸!
                </Typography>
            </Grid>
            <Grid container item xs={12} justify="center" alignItems="center">
                <Cookie />
            </Grid>
            <Grid container item xs={12} justify="center" alignItems="center">
                <Typography variant="h4" align="center">
                    POINTS: 10
                </Typography>
            </Grid>
        </StyledGrid>
    );
}

const StyledGrid = styled(({ ...props }) => <Grid {...props} />)`
    && {
        height: 100%;
    }
`;

export default Home;
