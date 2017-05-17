import { GET_RATES, CHANGE_BASE } from '../constants';

export function ratesReducer(state = [], action) {
  switch (action.type) {
    case GET_RATES:
      return action.rates;
    default:
      return state;
  }
}

export function baseReducer(state = '', action) {
  switch (action.type) {
    case CHANGE_BASE:
      return action.base;
    default:
      return state;
  }
}