/* eslint-disable */
import { createStore } from 'redux';
import reducerFn from '../reducer/reducerFn';

const store = createStore(
  reducerFn,
);

export default store;
