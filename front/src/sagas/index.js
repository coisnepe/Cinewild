import { spawn } from 'redux-saga/effects';
import  movieListWatcherSaga from './movieListSaga';
import postMovieWatcherSaga from './postMovieSaga';
import randomMoviesWatcherSaga from './randomMovieSaga';
import movieDetailsWatcherSaga from './movieDetailsSaga';

function* rootSaga() {
    yield spawn (movieListWatcherSaga)    
    yield spawn (postMovieWatcherSaga)    
    yield spawn (randomMoviesWatcherSaga)     
    yield spawn (movieDetailsWatcherSaga)      
}

export default rootSaga;