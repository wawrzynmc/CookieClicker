import * as actionTypes from '../actions/actionTypes';

const initialState = {
    points: 0,
};

// --- AUXILIARY FUNCTIONS
const addPoints = (state, action) => {
    return { 
        ...state, 
        points: state.points + action.points 
    };
};

// --- REDUCER ACTIONS
const cookiePointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_POINTS:
            return addPoints(state, action);
        default:
            return state;
    }
};

export default cookiePointsReducer;
