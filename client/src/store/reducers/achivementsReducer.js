import { removeValueFromArray } from '../../shared/utils';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    achivementsIds: [],
};

// --- AUXILIARY FUNCTIONS
const addAchivements = (state, action) => {
    const gainedAchivementsIds = action.achivementsIds;

    return {
        ...state,
        achivementsIds: [...state.achivementsIds, ...gainedAchivementsIds],
    };
};

const removeAchivement = (state, action) => {
    const currentAchivementsIds = state.achivementsIds;
    const achivementIdToRemove = action.achivementsIds;
    const gainedAchivementsIds = removeValueFromArray(currentAchivementsIds, achivementIdToRemove);

    return {
        ...state,
        achivementsIds: gainedAchivementsIds,
    };
};

const removeAllAchivements = (state, action) => {
    return {
        ...state,
        achivementsIds: [],
    };
};

// --- REDUCER ACTIONS
const achivementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ACHIVEMENTS:
            return addAchivements(state, action);
        case actionTypes.REMOVE_ACHIVEMENT:
            return removeAchivement(state, action);
        case actionTypes.REMOVE_ALL_ACHIVEMENTS:
            return removeAllAchivements(state, action);
        default:
            return state;
    }
};

export default achivementsReducer;
