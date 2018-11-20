import { spawn } from 'redux-saga/effects';
import  movieListWatcherSaga from './movieListSaga';
import postMovieWatcherSaga from './postMovieSaga';
import randomMoviesWatcherSaga from './randomMovieSaga';

function* rootSaga() {
    yield spawn (movieListWatcherSaga)    
    yield spawn (postMovieWatcherSaga)    
    yield spawn (randomMoviesWatcherSaga)        
}

export default rootSaga;