import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import { install } from 'redux-loop';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  install()
);

const store = createStore(
  rootReducer,
  {},
  enhancer
);

export default store;