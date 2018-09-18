import { combineReducers } from 'redux';
import fetchReducer from './fetch.js';

import postReducer from './post.js';
import searchReducer from './search.js';

const combinedReducers = combineReducers({
    fetchReducer,
    postReducer,
    searchReducer,
});

export default combinedReducers;