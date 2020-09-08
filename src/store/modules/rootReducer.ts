import { combineReducers } from 'redux';

import connection from './connections/reducer';
import classes from './classes/reducer';

import { StoreState } from '../createStore';

export default combineReducers<StoreState>({
  connection,
  classes,
})
