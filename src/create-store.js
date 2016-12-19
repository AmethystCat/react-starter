import {createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from './reducers';

export default function(data) {
	let reducers = combineReducers({
		
	});
	let store = createStore(reducers, data);
	return store;
};