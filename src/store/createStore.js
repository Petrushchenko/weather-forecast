import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

const initialState = {};
const enhancers = [thunk, apiMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...enhancers)
);

export default store;
