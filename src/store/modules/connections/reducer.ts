import { ConnectionAction, ConnectionState } from "./types";

const initial_state = {
  loading: false,
  total: 0
};

const connection = (state = initial_state, action: ConnectionAction): ConnectionState => {
  switch (action.type) {
    case '@connection/GET_CONNECTIONS':
      return {
        ...state,
        loading: true,
      }
    case '@connection/GET_CONNECTIONS_SUCCESS':
      return {
        loading: false,
        total: action.payload
      }
    case '@connection/GET_CONNECTIONS_FAILED':
      return {
        loading: false,
        total: action.payload,
      }
    default:
      return state;
  }
}

export default connection;
