// -- imports
import React from 'react';
import styled from 'styled-components';
import { Button, Container, Grid, Typography, useTheme } from '@material-ui/core';

// -- internal components/imports
import AchivementAccordion from '../molecules/AchivementAccordion/AchivementAccordion';
import Loader from '../molecules/Loader/Loader';
import { getAchivementsQuery } from '../../api/queries/queries';
import { GET_ACHIVEMENTS } from '../../api/queries/queries-keys';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllAchivements } from '../../store/actions/achivementsActions';
import { RotateLeftOutlined, RotateRightOutlined } from '@material-ui/icons';

// * -- COMPONENT
function Achievements() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { data: achivements, isLoading } = getAchivementsQuery(GET_ACHIVEMENTS);

    const {
        achivements: { achivementsIds },
    } = useSelector((state) => state);

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
                            ? achivements.map((achivement) => {
                                  const achived = achivementsIds.includes(achivement.id);
                                  return (
                                      <AchivementAccordion
                                          key={achivement.id}
                                          achivement={achivement}
                                          achived={achived}
                                      />
                                  );
                              })
                            : null}
                    </Grid>
                </Container>
                <Grid container item direction="row" justify="center" alignItems="center">
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<RotateLeftOutlined />}
                        size="large"
                        disableRipple={true}
                        endIcon={<RotateRightOutlined />}
                        style={{ fontSize: '1.2rem' }}
                        onClick={() => dispatch(removeAllAchivements())}
                        disabled={achivementsIds.length === 0}
                    >
                        reset
                    </Button>
                </Grid>
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
