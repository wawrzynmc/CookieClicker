import { combineReducers } from 'redux';
import achivementsReducer from './achivementsReducer';
import cookieReducer from './cookieReducer';
import userReducer from './userReducer';

// -- combine all reducers
const rootReducer = combineReducers({
    cookie: cookieReducer,
    user: userReducer,
    achivements: achivementsReducer,
});

export default rootReducer;
