import { Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import SignIn from '../organisms/SignIn/SignIn';
import SignUp from '../organisms/SignUp/SignUp';
import TabPanel from '../organisms/TabPanel/TabPanel';

function Authenticate() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Paper elevation={10} variant="outlined">
            <Tabs value={value} onChange={handleChange} indicatorColor="secondary" centered>
                <Tab label={<Typography variant="h5">Sign In</Typography>} />
                <Tab label={<Typography variant="h5">Sign Up</Typography>} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <SignIn handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp handleChange={handleChange} />
            </TabPanel>
        </Paper>
    );
}

export default Authenticate;
