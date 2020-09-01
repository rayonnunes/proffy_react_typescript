import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type ConnectionAction = ActionType<typeof actions>

export interface ConnectionState {
  loading: boolean;
  total: number;
}
