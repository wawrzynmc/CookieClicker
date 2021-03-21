import { combineReducers } from 'redux';
import cookieReducer from './cookieReducer';
import userReducer from './userReducer';

// -- combine all reducers
const rootReducer = combineReducers({
    cookie: cookieReducer,
    user: userReducer,
});

export default rootReducer;
