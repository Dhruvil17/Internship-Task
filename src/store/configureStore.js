import combineReducer from '../reducers/combineReducer';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(combineReducer, applyMiddleware(thunk));
export default store;
