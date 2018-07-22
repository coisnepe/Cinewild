import { combineReducers } from 'redux';
import fetchReducer from './fetch.js';
import searchReducer from './search.js';

const combinedReducers = combineReducers({
    fetchReducer,
    searchReducer,
});

export default combinedReducers;