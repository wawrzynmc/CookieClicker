import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import { loadFromLocalStorage, saveToLocalStorage } from '../shared/utils';
// import throttle from 'lodash.throttle';

// redux store setup
const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

// -- create store with initial value and options
const store = createStore(rootReducer, loadFromLocalStorage(), composeEnhancers());

// -- save state to localStorage
store.subscribe(() =>
    saveToLocalStorage({
        cookie: store.getState().cookie,
    })
);

export default store;
