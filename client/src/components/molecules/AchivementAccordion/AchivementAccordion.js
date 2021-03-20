// -- imports
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    Grid,
    Typography,
} from '@material-ui/core';
import {
    ExpandMoreOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    RotateLeftOutlined,
} from '@material-ui/icons';
 import React from 'react';

// -- internal components
import IconButton from '../../atoms/IconButton/IconButton';

const userAchivementsIds = ['1', '3'];

// * -- COMPONENT
function AchivementAccordion({ achivement, id }) {
    const { title, description } = achivement;

    // -- check if achivement has been achived
    const achived = userAchivementsIds.includes(id);

    return (
        <Grid key={id} item xs={12} sm={6} md={4}>
            <Accordion key={id}>
                <AccordionSummary
                    style={{ alignItems: 'center' }}
                    expandIcon={<ExpandMoreOutlined color="primary" fontSize="large" />}
                >
                    {achived ? (
                        <FavoriteOutlined
                            fontSize="large"
                            color="secondary"
                            style={{ margin: 'auto' }}
                        />
                    ) : (
                        <FavoriteBorderOutlined fontSize="large" style={{ margin: 'auto' }} />
                    )}

                    <Typography
                        color="primary"
                        variant="h6"
                        style={{ flexGrow: 1, letterSpacing: '1px' }}
                        align="center"
                    >
                        {title}
                    </Typography>
                </AccordionSummary>
                <Divider variant="middle" />
                <AccordionDetails>
                    <Typography align="left" style={{ color: 'black', flexBasis: '80%' }}>
                        {description}
                    </Typography>
                    <IconButton withPopover popoverContent={'Reset achivement'}>
                        <RotateLeftOutlined color="action" fontSize="large" />
                    </IconButton>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
}

export default AchivementAccordion;
