import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function ValueLabel({ children, value }) {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                style={{ margin: '30px 0px', textTransform: 'uppercase', fontWeight: 'bold' }}
            >
                {children} <StyledValue>{value}</StyledValue>
            </Typography>
        </>
    );
}

const StyledValue = styled(motion.span)`
    color: red;
`;

export default ValueLabel;
