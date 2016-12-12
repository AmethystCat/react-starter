import {createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from './reducers';

export default function(data) {
	let reducer = combineReducers(reducers);
	let store = createStore(reducers, data);
	return store;
};