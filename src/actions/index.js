import axios from 'axios';
import { API, GET_LATEST_CURR } from '../constants';

export function getLatestCurrs(currencies) {
  return {
    currencies,
    type: GET_LATEST_CURR,
  };
}


export function startGetLatestCurrs() {
  return (dispatch) => {
    axios.get(`${API}/latest`)
    .then((resp) => {
      dispatch(getLatestCurrs(resp.data));
    })
    .catch((error) => {
      console.error(error);
    });
  };
}