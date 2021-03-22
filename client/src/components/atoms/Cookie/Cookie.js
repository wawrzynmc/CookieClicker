// -- imports
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

// -- internal components/imports
import coockieSVG from '../../../assets/images/cookie.svg';
import { addAchivements, incrementPoints } from '../../../store/actions';
import { cookieAnimation } from '../../../shared/animations';
import { getAchivementsQuery } from '../../../api/queries/queries';
import { GET_ACHIVEMENTS } from '../../../api/queries/queries-keys';
import Loader from '../../molecules/Loader/Loader';
import { checkAchivements } from '../../../shared/utils';

// * -- COMPONENT
function Cookie() {
    const [animate, cycle] = useCycle(...cookieAnimation);
    const dispatch = useDispatch();
    const { data: allAchivements, isLoading } = getAchivementsQuery(GET_ACHIVEMENTS);
    const { enqueueSnackbar } = useSnackbar();

    const {
        cookie: { points, level },
        achivements: { achivementsIds },
    } = useSelector((state) => state);

    useEffect(() => {
        if (allAchivements) {
            const newAchivementsIds = checkAchivements(
                points,
                level,
                allAchivements,
                achivementsIds
            );
            if (newAchivementsIds.length) {
                dispatch(addAchivements(newAchivementsIds));

                newAchivementsIds.forEach((element) => {
                    enqueueSnackbar('New achivement has been unlocked', {
                        variant: 'success',
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                        },
                    });
                });
            }
        }
    }, [achivementsIds, allAchivements, dispatch, enqueueSnackbar, level, points]);

    return (
        <>
            {isLoading && <Loader />}
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
        </>
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
