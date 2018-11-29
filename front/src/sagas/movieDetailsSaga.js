import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_UNIQUE_MOVIE, FETCH_SUCCESS, FETCH_ERROR } from '../actions/index'
import apiCalls from '../services/apiCalls'

export default function* movieDetailsWatcherSaga() {
  yield takeLatest(FETCH_UNIQUE_MOVIE, movieDetailsWorkerSaga);
}
function* movieDetailsWorkerSaga(action) {  
  try {
    const response = yield call (apiCalls.fetchMovieById, action.payload);
    yield put({ type: FETCH_SUCCESS, payload : response });
  } catch (error) {
    yield put({ type: FETCH_ERROR, payload : error });
  }
}