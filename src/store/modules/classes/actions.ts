import { action } from 'typesafe-actions';
import { ClassesState, ResponseProps } from './types';

export const createNewClass = ({
  name,
  avatar,
  whatsapp,
  bio,
  subject,
  cost,
  schedule,
}: ClassesState) => {
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
