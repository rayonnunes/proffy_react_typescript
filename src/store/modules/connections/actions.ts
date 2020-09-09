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

export const createConnection = (user_id: number) => {
  return action('@connection/CREATE_CONNECTIONS', {user_id})
}

export const createConnectionSuccess = () => {
  return action('@connection/CREATE_CONNECTIONS_SUCCESS')
}

export const createConnectionFailed = () => {
  return action('@connection/CREATE_CONNECTIONS_FAILED')
}
