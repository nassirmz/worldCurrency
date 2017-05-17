import { GET_LATEST_CURR } from '../constants';

export function currReducer(state = {}, action) {
  switch(action.type) {
    case GET_LATEST_CURR:
      return action.currencies;
    default:
      return state;
  }
}