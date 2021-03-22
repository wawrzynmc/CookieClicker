// -- imports
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '@material-ui/core';
import wipSVG from '../../assets/images/wip.svg';

// * -- COMPONENT
function Shop() {
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <StyledImage whileHover={{ scale: 1.1, cursor: 'pointer' }} src={wipSVG} alt="wip" />
        </Container>
    );
}

// -- styled components
const StyledImage = styled(motion.img)`
    width: 50%;
`;

export default Shop;
