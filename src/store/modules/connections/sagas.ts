import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import api from '../../../services/api'

export function* connect (action: ActionType<typeof actions.getConnection>) {
  try {

    const { data } = yield call(api.get, '/connections')
    yield put(actions.getConnectionSuccess(data.total))

  } catch (error) {

    yield put(actions.getConnectionFailed())

  }
}

export function* createConnection (
  action: ActionType<typeof actions.createConnection>
) {
  try {

    const { payload } = action
    yield call(api.post, '/connections', payload)
    yield put(actions.createConnectionSuccess())

  } catch (error) {

    yield put(actions.createConnectionFailed())

  }
}

export default all([
  takeLatest('@connection/GET_CONNECTIONS', connect),
  takeLatest('@connection/CREATE_CONNECTIONS', createConnection)
])
