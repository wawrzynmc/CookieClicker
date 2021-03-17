import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function ValueLabel({ children, value }) {
    return (
        <>
            <StyledLabel variant="h4" align="center">
                {children} <StyledValue>{value}</StyledValue>
            </StyledLabel>
        </>
    );
}

const StyledLabel = styled(({ ...props }) => <Typography {...props} />)`
    margin: 30px 0px;
    text-transform: uppercase;
    font-weight: bold;
`;

const StyledValue = styled(motion.span)`
    color: red;
`;

export default ValueLabel;
