import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import GlobalStyle from './assets/styles/global'
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  )
}

export default App
