import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    Grid,
    Typography,
} from '@material-ui/core';
import {
    CheckBoxOutlineBlankOutlined,
    ClearAllOutlined,
    ExpandMoreOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    RotateLeftOutlined,
} from '@material-ui/icons';
import React from 'react';
import IconButton from '../../atoms/IconButton/IconButton';

const userAchivementsIds = ['1', '3'];

function AchivementAccordion({ achivement }) {
    const { id, title, description } = achivement;

    // -- check if achivement has been achived
    const achived = userAchivementsIds.includes(id);

    return (
        <Grid key={id} conainer item xs={12} sm={6} md={4}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreOutlined color="primary" fontSize="large" />}
                >
                    {achived ? (
                        <FavoriteOutlined fontSize="large" color="secondary"/>
                    ) : (
                        <FavoriteBorderOutlined fontSize="large"/>
                    )}

                    <Typography color="primary" variant="h5" style={{ flexGrow: 1 }} align="center">
                        {title}
                    </Typography>
                </AccordionSummary>
                <Divider variant="middle" />
                <AccordionDetails>
                    <Typography color="textSecondary" align="left" style={{ flexBasis: '80%' }}>
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
