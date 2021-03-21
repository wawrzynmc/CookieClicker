// -- imports
import React from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import { useDispatch } from 'react-redux';

// -- internal components/imports
import coockieSVG from '../../../assets/images/cookie.svg';
import { incrementPoints } from '../../../store/actions';
import { cookieAnimation } from '../../../shared/animations';

// * -- COMPONENT
function Cookie() {
    const [animate, cycle] = useCycle(...cookieAnimation);
    const dispatch = useDispatch();

    return (
        <StyledImage
            whileHover={{ scale: 1.1, cursor: 'pointer' }}
            animate={animate}
            onTap={() => {
                dispatch(incrementPoints(1));
                cycle();
            }}
            src={coockieSVG}
            alt="cookie"
        />
    );
}

// -- styled components
const StyledImage = styled(motion.img)`
    && {
        @media (max-width: 400px) {
            width: 50%;
        }
    }
`;

export default Cookie;
