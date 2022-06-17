import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  serviceCreateReducer,
  serviceReducer,
} from './redux/reducers/serviceReducer';

const reducer = combineReducers({
  services: serviceReducer,
  serviceCreate: serviceCreateReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
