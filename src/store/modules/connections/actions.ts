import { action } from 'typesafe-actions'

export const getConnection = () => {
  return action('@connection/GET_CONNECTIONS')
}

export const getConnectionSuccess = () => {
  return action('@connection/GET_CONNECTIONS_SUCCESS', 1)
}

export const getConnectionFailed = () => {
  return action('@connection/GET_CONNECTIONS_FAILED', 0)
}
