import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type ConnectionAction = ActionType<typeof actions>

export interface ConnectionState {
  readonly loading: boolean;
  readonly total: number;
}
