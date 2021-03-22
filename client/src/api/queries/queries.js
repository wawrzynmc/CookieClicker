/* eslint-disable react-hooks/rules-of-hooks */
// -- imports
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

// -- internal imports
import { login, logout } from '../../store/actions';
import { getAchivements } from '../achivements-api';
import { checkAuth } from '../users-api';

// * -- queries
export const checkAuthQuery = (queryKey) => {
    const dispatch = useDispatch();
    const { data, isError } = useQuery(queryKey, checkAuth);

    if (data) {
        if (data.currentUser) {
            dispatch(login());
        } else {
            dispatch(logout());
        }
    }

    return { isError };
};

export const getAchivementsQuery = (queryKey) => {
    const { data, isLoading } = useQuery(queryKey, getAchivements);

    // ? -- evenutally dispatch some action

    return { data, isLoading };
};
