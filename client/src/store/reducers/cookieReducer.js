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
const cookieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_POINTS:
            return addPoints(state, action);
        default:
            return state;
    }
};

export default cookieReducer;
