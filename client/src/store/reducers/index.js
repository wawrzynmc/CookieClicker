import { combineReducers } from 'redux';
import cookiePointsReducer from './cookiePoints';

// -- combine all reducers
const rootReducer = combineReducers({
    cookiePoints: cookiePointsReducer,
});

export default rootReducer;
