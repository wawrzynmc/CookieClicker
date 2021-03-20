import { Box } from '@material-ui/core';
import React from 'react';

function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

export default TabPanel;
