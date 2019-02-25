import React from 'react';
import Navigation from './navigations/index'
import { Provider } from 'react-redux'
import store from './store/index'

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
      <Navigation />
      </Provider>
    )
  }
}