import axios from 'axios';
import _ from 'lodash';

import { API, GET_RATES, CHANGE_BASE } from '../constants';

export function getRates(rates) {
  return {
    rates,
    type: GET_RATES
  };
}

export function changeBase(base) {
  return {
    base,
    type: CHANGE_BASE
  };
}

export function startGetCurrs(base = 'EUR') {
  return (dispatch) => {
    axios.get(`${API}/latest?base=${base}`)
    .then((resp) => {
      dispatch(getRates(_.toPairs(resp.data.rates)));
      dispatch(changeBase(base));
    })
    .catch((error) => {
      console.error(error);
    });
  };
}