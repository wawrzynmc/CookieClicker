// -- imports
import React from 'react';
import { Box } from '@material-ui/core';

function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

export default TabPanel;
