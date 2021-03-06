import { all } from 'redux-saga/effects';
import connection from './connections/sagas';
import classes from './classes/sagas';

export default function* rootSaga() {
  return yield all([
    connection,
    classes,
  ])
}

