// -- imports
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Container, Grid, Typography, useTheme } from '@material-ui/core';
import styled from 'styled-components';

// -- internal components
import AchivementAccordion from '../molecules/AchivementAccordion/AchivementAccordion';
import { fetchAchivements } from '../../api/achivements-api';
import Dialog from '../organisms/Dialog/Dialog';
import Loader from '../molecules/Loader/Loader';

// * -- COMPONENT
function Achievements() {
    const theme = useTheme();
    const { data: achivements, error, isLoading } = useQuery('fetchAchivements', fetchAchivements);

    useEffect(() => {
        // dispatch redux action
    }, [achivements]);

    return (
        <>
            {error && <Dialog type="error" />}
            {isLoading && <Loader />}
            <StyledContainerGrid>
                <StyledContainer maxWidth="lg" disableGutters={true} theme={theme}>
                    <Typography
                        variant="h4"
                        align="center"
                        style={{ fontWeight: 'bolder', letterSpacing: '2px' }}
                    >
                        🎉 Achivements 🎉
                    </Typography>
                </StyledContainer>
                <Container maxWidth="lg" disableGutters={true}>
                    <Grid
                        container
                        spacing={4}
                        justify="center"
                        direction="row"
                        style={{ margin: 'auto', width: '100%' }}
                    >
                        {achivements
                            ? achivements.map((achivement) => (
                                  <AchivementAccordion
                                      key={achivement.id}
                                      achivement={achivement}
                                  />
                              ))
                            : null}
                    </Grid>
                </Container>
            </StyledContainerGrid>
        </>
    );
}

// -- styled components
const StyledContainerGrid = styled(({ ...props }) => <Grid {...props} />)`
    && {
        height: 100%;
    }
`;

const StyledContainer = styled(({ ...props }) => <Container {...props} />)`
    && {
        background-color: ${(props) => props.theme.palette.background.paper};

        padding: 20px 0;
        margin-bottom: 20px;
        margin-top: 20px;
    }
`;

export default Achievements;
