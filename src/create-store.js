import {createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

export default function(data) {
	let finalReducers = combineReducers(reducers);
	let store = createStore(finalReducers, data);
 
	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}
	return store;
};