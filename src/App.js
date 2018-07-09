import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import config from './config';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    //second argument in createStore is for any initial state we might want to pass to Redux
    //ReduxThunk is considered a store enhancer
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
