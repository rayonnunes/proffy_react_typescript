import { action } from 'typesafe-actions';
import {
  ClassesState,
  ResponseProps,
  GetTeachersFilters
} from './types';

export const getTeachers = ({
  subject,
  week_day,
  time,
}: GetTeachersFilters) => {
  return action('@classes/SEARCH_TEACHERS', {
    subject,
    week_day,
    time,
  })
}

export const getTeachersSuccess = (data: ClassesState['classesList']) => {
  return action('@classes/SEARCH_TEACHERS_SUCCESS', data)
}

export const getTeachersFailed = () => {
  return action('@classes/SEARCH_TEACHERS_FAILED')
}

export const createNewClass = ({
  name,
  avatar,
  whatsapp,
  bio,
  subject,
  cost,
  schedule,
}: ClassesState['newClass']) => {
  return action('@classes/CREATE_NEW_CLASS', {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  })
}

export const createNewClassSuccess = (message: ResponseProps) => {
  return action('@classes/CREATE_NEW_CLASS_SUCCESS', message)
}

export const createNewClassFailed = (errorMessage: ResponseProps) => {
  return action('@classes/CREATE_NEW_CLASS_FAILED', errorMessage)
}
