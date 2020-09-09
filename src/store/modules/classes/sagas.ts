import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';

export function* getTeachers(action: ActionType<typeof actions.getTeachers>) {
  try {
    const { subject, week_day, time } = action.payload;
    const { data } = yield call(
      api.get,
      `/classes?subject=${subject}&week_day=${week_day}&time=${time}`
    )
    console.log(data);
    yield put(actions.getTeachersSuccess(data))
  } catch (error) {
    yield put(actions.getTeachersFailed())
  }
}

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
  takeLatest('@classes/SEARCH_TEACHERS', getTeachers),
])
