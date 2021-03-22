import * as actionTypes from './actionTypes';

export const addAchivements = (achivementsIds) => {
    return {
        type: actionTypes.ADD_ACHIVEMENTS,
        achivementsIds,
    };
};

export const removeAchivement = (achivementId) => {
    return {
        type: actionTypes.REMOVE_ACHIVEMENT,
        achivementId,
    };
};

export const removeAllAchivements = () => {
    return {
        type: actionTypes.REMOVE_ALL_ACHIVEMENTS,
    };
};
