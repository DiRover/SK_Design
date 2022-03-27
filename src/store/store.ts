/* eslint-disable */
import { createStore, compose } from 'redux';
import reducerFn from '../reducer/reducerFn';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducerFn,
  composeEnhancers,
);

export default store;
