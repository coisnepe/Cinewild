import { combineReducers } from 'redux';
import fetchMoviesReducer from './fetchMoviesReducer';
import postMovieReducer from './postMovieReducer';

const combinedReducers = combineReducers({
    fetchMoviesReducer,
    postMovieReducer,
});

export default combinedReducers;