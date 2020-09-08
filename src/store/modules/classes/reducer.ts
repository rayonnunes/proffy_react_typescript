import { ClassesState, ClassesAction } from './types';

const initialState: ClassesState = {
  name: '',
  avatar: '',
  whatsapp: '',
  bio: '',
  subject: '',
  cost: '',
  schedule: [
    {
      week_day: 0,
      from: '',
      to: ''
    }
  ],
  loading: false,
  status: null,
  message: null,
}

const classes = (state = initialState, action: ClassesAction ): ClassesState => {
  switch (action.type) {
    case '@classes/CREATE_NEW_CLASS':
      return {
        ...state,
        loading: true,
      }
    case '@classes/CREATE_NEW_CLASS_SUCCESS':
      return {
        ...state,
        loading: false,
        status: 'success',
        message: action.payload,
      }
    case '@classes/CREATE_NEW_CLASS_FAILED':
      return {
        ...state,
        loading: false,
        status: 'error',
        message: action.payload,
      }
    default:
      return initialState;
  }
}

export default classes;
