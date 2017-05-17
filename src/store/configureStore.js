import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { currReducer } from '../reducers';

// combine reducers passing each reducer with its corresponding state
const reducer = combineReducers({
  currencies: currReducer
});

// create store and export
const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware)));

export default store;