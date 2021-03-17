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

const clearPoints = (state, action) => {
    return { 
        ...state, 
        points: 0 
    };
};

// --- REDUCER ACTIONS
const cookieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_POINTS:
            return addPoints(state, action);
        case actionTypes.CLEAR_POINTS:
            return clearPoints(state, action);
        default:
            return state;
    }
};

export default cookieReducer;
