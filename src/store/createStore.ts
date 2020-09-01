import {
  applyMiddleware,
  createStore,
  Middleware,
  Reducer,
} from 'redux';
import { ConnectionAction, ConnectionState } from './modules/connections/types';

export interface StoreState {
  connection: ConnectionState;
}

export type StoreAction = ConnectionAction; // ConnectionAction | OutraAction | OutraAction | ... ;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
}
