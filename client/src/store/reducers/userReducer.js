import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
};

// --- AUXILIARY FUNCTIONS
const login = (state, action) => {
    return { 
        ...state, 
        isLoggedIn: true
    };
};

const logout = (state, action) => {
    return { 
        ...state, 
        isLoggedIn: false
    };
};

// --- REDUCER ACTIONS
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return login(state, action);
        case actionTypes.LOGOUT:
            return logout(state, action);
        default:
            return state;
    }
};

export default userReducer;