/* eslint-disable react-hooks/rules-of-hooks */
// -- imports
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

// -- internal imports
import { login, logout } from '../../store/actions';
import { getAchivements } from '../achivements-api';
import { checkAuth } from '../users-api';
import { CHECK_AUTH, GET_ACHIVEMENTS } from './queries-keys';

// * -- queries
export const checkAuthQuery = () => {
    const dispatch = useDispatch();
    const { data, isError } = useQuery(CHECK_AUTH, checkAuth);

    if (data) {
        if (data.currentUser) {
            dispatch(login());
        } else {
            dispatch(logout());
        }
    }

    return { isError };
};

export const getAchivementsQuery = () => {
    const { data, isLoading } = useQuery(GET_ACHIVEMENTS, getAchivements);

    // ? -- evenutally dispatch some action

    return { data, isLoading };
};
