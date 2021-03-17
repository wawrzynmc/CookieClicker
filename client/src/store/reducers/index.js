import { combineReducers } from 'redux';
import cookieReducer from './cookieReducer';

// -- combine all reducers
const rootReducer = combineReducers({
    cookie: cookieReducer,
});

export default rootReducer;
