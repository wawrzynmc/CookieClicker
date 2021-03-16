import * as actionTypes from './actionTypes';

export const incrementPoints = (points) => {
    return {
        type: actionTypes.INCREMENT_POINTS,
        points,
    };
};
