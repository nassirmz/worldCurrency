import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { ratesReducer, baseReducer } from '../reducers';

// combine reducers passing each reducer with its corresponding state
const reducer = combineReducers({
  rates: ratesReducer,
  base: baseReducer
});

// create store and export
const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware)));

export default store;