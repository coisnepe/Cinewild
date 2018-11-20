import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_SUCCESS, FETCH_REQUEST, FETCH_ERROR } from '../actions/index'
import apiCalls from '../services/apiCalls'

export default function* movieListWatcherSaga() {
  yield takeLatest(FETCH_REQUEST, movieListWorkerSaga);
}
function* movieListWorkerSaga() {  
  try {
    const response = yield call (apiCalls.getMovies);
    yield put({ type: FETCH_SUCCESS, payload : response });
  } catch (error) {
    yield put({ type: FETCH_ERROR, payload : error });
  }
}