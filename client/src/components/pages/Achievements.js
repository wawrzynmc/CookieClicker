// -- imports
import React from 'react';
import { Container, Grid, Typography, useTheme } from '@material-ui/core';
import styled from 'styled-components';

// -- internal components
import AchivementAccordion from '../molecules/AchivementAccordion/AchivementAccordion';

const achivements = [
    {
        id: '1',
        title: 'First click 🥇',
        description:
            'The achivement will be marked as passed, when you click at the cookie at least once!',
    },
    {
        id: '2',
        title: '100 click 💯',
        description:
            'The achivement will be marked as passed, when you click at the least 100 times!',
    },
    {
        id: '3',
        title: 'Reset 🧹',
        description: 'The achivement will be marked as passed, when you reset the game!',
    },
    {
        id: '4',
        title: 'Junior 👶',
        description: 'The achivement will be marked as passed, when you get to 1. level!',
    },
    {
        id: '5',
        title: 'Regular 👨',
        description: 'The achivement will be marked as passed, when you get to 10. level!',
    },
    {
        id: '6',
        title: 'Senior 👴',
        description: 'The achivement will be marked as passed, when you get to 20. level!',
    },
    {
        id: '7',
        title: 'The Beast 🐻',
        description: 'The achivement will be marked as passed, when you get to 100. level!',
    },
];

// * -- COMPONENT
function Achievements() {
    const theme = useTheme();

    return (
        <>
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
                    {achivements.map((achivement) => (
                        <AchivementAccordion key={achivement.id} achivement={achivement} />
                    ))}
                </Grid>
            </Container>
        </>
    );
}

// -- styled components
const StyledContainer = styled(({ ...props }) => <Container {...props} />)`
    && {
        background-color: ${(props) => props.theme.palette.background.paper};

        padding: 20px 0;
        margin-bottom: 20px;
        margin-top: 20px;
    }
`;

export default Achievements;
