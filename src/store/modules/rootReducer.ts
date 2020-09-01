import { combineReducers } from 'redux';

import connection from './connections/reducer';
import { StoreState } from '../createStore';

export default combineReducers<StoreState>({
  connection
})
