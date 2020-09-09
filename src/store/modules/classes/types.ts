import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface GetTeachersFilters {
  subject: string;
  week_day: string;
  time: string;
}

interface ScheduleItemsState {
  readonly week_day: number | string;
  readonly from: string;
  readonly to: string;
}

export interface ResponseProps {
  readonly title: string;
  readonly content: string;
}

export interface ClassProps {
  readonly name: string;
  readonly avatar: string;
  readonly whatsapp: string;
  readonly bio: string;
  readonly subject: string;
  readonly cost: string;
  readonly schedule: ScheduleItemsState[];
}

export interface ClassResponseProps extends ClassProps {
  readonly id: number;
  readonly user_id: number;
}

export interface ClassesState {
  readonly newClass: ClassProps;
  readonly classesList: ClassResponseProps[];
  readonly loading?: boolean;
  readonly status?: string | null;
  readonly message?: ResponseProps | null;
}


export type ClassesAction = ActionType<typeof actions>
