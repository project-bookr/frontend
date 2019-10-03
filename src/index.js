import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import App from './components/App/App'
import {loadState,saveState} from './components/localStorage';
import throttle from 'lodash/throttle';

const persistedState=loadState();


const store = createStore(
  rootReducer,
  persistedState,
    compose(
      applyMiddleware( thunk, logger ),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, 
      )
);	
    
store.subscribe(throttle( () => {
  saveState({ books: store.getState().books} );
},1000))
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  