import { calculateLevel } from '../../shared/utils';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    points: 0,
    level: 0,
};

// --- AUXILIARY FUNCTIONS
const addPoints = (state, action) => {
    const points = state.points + action.points;
    const level = calculateLevel(points);
    console.log(points, level);
    return {
        ...state,
        points,
        level,
    };
};

const clearPoints = (state, action) => {
    const points = 0;
    const level = calculateLevel(points);
    return {
        ...state,
        points,
        level,
    };
};

const checkPoints = (state, action) => {
    console.log(state);
    return state;
};

// --- REDUCER ACTIONS
const cookieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_POINTS:
            return addPoints(state, action);
        case actionTypes.CLEAR_POINTS:
            return clearPoints(state, action);
        case actionTypes.CHECK_POINTS:
            return checkPoints(state, action);
        default:
            return state;
    }
};

export default cookieReducer;
