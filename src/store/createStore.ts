import {
  applyMiddleware,
  createStore,
  Middleware,
  Reducer,
} from 'redux';
import { ConnectionAction, ConnectionState } from './modules/connections/types';
import { ClassesAction, ClassesState } from './modules/classes/types';

export interface StoreState {
  connection: ConnectionState;
  classes: ClassesState;
}

export type StoreAction = ConnectionAction | ClassesAction // ConnectionAction | OutraAction | OutraAction | ... ;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
}
