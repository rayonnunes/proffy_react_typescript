import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

interface ScheduleItemsState {
  readonly week_day: number | string;
  readonly from: string;
  readonly to: string;
}

export interface ResponseProps {
  readonly title: string;
  readonly content: string;
}

export interface ClassesState {
  readonly name: string;
  readonly avatar: string;
  readonly whatsapp: string;
  readonly bio: string;
  readonly subject: string;
  readonly cost: string;
  readonly schedule: Array<ScheduleItemsState>;
  readonly loading?: boolean;
  readonly status?: string | null;
  readonly message?: ResponseProps | null;
}

export type ClassesAction = ActionType<typeof actions>
