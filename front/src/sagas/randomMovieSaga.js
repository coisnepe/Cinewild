import { call, put, takeLatest } from 'redux-saga/effects';
import { RANDOM_MOVIES_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from '../actions/index'
import apiCalls from '../services/apiCalls'

export default function* randomMoviesWatcherSaga() {
  yield takeLatest(RANDOM_MOVIES_REQUEST, randomMoviesWorkerSaga);
}
function* randomMoviesWorkerSaga(action) {  
  try {
    const response = yield call (apiCalls.getRandomMovies, action.payload);
    yield put({ type: FETCH_SUCCESS, payload : response });
  } catch (error) {
    yield put({ type: FETCH_ERROR, payload : error });
  }
}