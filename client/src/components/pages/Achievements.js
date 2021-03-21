// -- imports
import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Typography, useTheme } from '@material-ui/core';

// -- internal components/imports
import AchivementAccordion from '../molecules/AchivementAccordion/AchivementAccordion';
import Loader from '../molecules/Loader/Loader';
import { getAchivementsQuery } from '../../api/queries/queries';

// * -- COMPONENT
function Achievements() {
    const theme = useTheme();
    const { data: achivements, isLoading } = getAchivementsQuery();

    return (
        <>
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
