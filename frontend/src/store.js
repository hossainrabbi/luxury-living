import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { serviceReducer } from './redux/reducers/serviceReducer';

const reducer = combineReducers({
  services: serviceReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
