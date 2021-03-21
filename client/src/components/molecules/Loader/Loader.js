// -- imports
import React, { useState } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

// * -- COMPONENT
function Loader() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Backdrop style={{ zIndex: 1000 }} open={open} onClick={handleClose}>
            <CircularProgress color="secondary" disableShrink={true} />
        </Backdrop>
    );
}

export default Loader;
