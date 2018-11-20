import { call, put, takeLatest } from 'redux-saga/effects';
import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from '../actions/index'
import apiCalls from '../services/apiCalls'

export default function* postMovieWatcherSaga() {
  yield takeLatest(POST_REQUEST, postMovieWorkerSaga);
}
function* postMovieWorkerSaga(action) {  
  try {
    const response = yield call (apiCalls.postMovie, action.payload);
    yield put({ type: POST_SUCCESS, payload : response });
    yield call (alert, response.data.message)
  } catch (error) {
    yield put({ type: POST_ERROR, payload : error });
  }
}