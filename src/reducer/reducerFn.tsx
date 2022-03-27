/* eslint-disable */
import { actionType } from '../actions/actionCreators';
import { ADD_REQUEST } from '../actions/actionTypes';
import { subscriptionType } from '../components/Form';

const initialState: subscriptionType = {
  firstName: '',
  phoneNumber: '',
  email: '',
  link: '',
  city: '',
  organisation: '',
  recipient: '',
  info: '',
};

export default function reducerFn(state: subscriptionType = initialState, action: actionType): subscriptionType {
  if (action.type === ADD_REQUEST) {
    return { ...state, ...action.payload };
  }
  return state;
}
