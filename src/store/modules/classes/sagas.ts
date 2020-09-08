import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';

export function* createNewClass(action: ActionType<typeof actions.createNewClass>) {
  try {
    const { payload } = action;
    const { message } = yield call(api.post, '/classes', payload)
    yield put(actions.createNewClassSuccess(message))

  } catch (error) {
    yield put(actions.createNewClassFailed(error.message))
  }
}

export default all([
  takeLatest('@classes/CREATE_NEW_CLASS', createNewClass),
])
