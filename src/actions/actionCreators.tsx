/* eslint-disable */
import { subscriptionType } from '../components/Form';
import { ADD_REQUEST } from './actionTypes';

export type actionType = {
  type: string,
  payload: subscriptionType,
}

export function addRequest(prop: subscriptionType): actionType {
  return { type: ADD_REQUEST, payload: { ...prop } };
}
