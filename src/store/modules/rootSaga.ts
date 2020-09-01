import { all } from 'redux-saga/effects';
import connection from './connections/sagas';

export default function* rootSaga() {
  return yield all([
    connection
  ])
}

