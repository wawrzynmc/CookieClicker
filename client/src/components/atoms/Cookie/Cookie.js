import React from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import coockieSVG from '../../../assets/images/cookie.svg';
import { useDispatch } from 'react-redux';
import { incrementPoints } from '../../../store/actions';
import { cookieAnimation } from '../../../shared/animations';

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

const StyledImage = styled(motion.img)``;

export default Cookie;
