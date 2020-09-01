import { action } from 'typesafe-actions'

export const getConnection = () => {
  return action('@connection/GET_CONNECTIONS')
}

export const getConnectionSuccess = (connections: number) => {
  return action('@connection/GET_CONNECTIONS_SUCCESS', {total: connections})
}

export const getConnectionFailed = () => {
  return action('@connection/GET_CONNECTIONS_FAILED', {total: 0})
}
