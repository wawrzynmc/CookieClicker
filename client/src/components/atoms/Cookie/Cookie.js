import React from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import coockieSVG from '../../../assets/images/cookie.svg';

function Cookie() {
    const [animate, cycle] = useCycle({ rotate: 0, x: '0'  }, { rotate: 90, x: '3px'  }, { rotate: -90, x: '-6px' });

    return (
        <StyledImage
            whileHover={{ scale: 1.1, cursor: 'pointer' }}
            animate={animate}
            onTap={() => cycle()}
            src={coockieSVG}
            alt="cookie"
        />
    );
}

const StyledImage = styled(motion.img)``;

export default Cookie;
