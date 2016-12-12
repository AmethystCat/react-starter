import React from 'react';
import { Provider } from 'react-redux';
import createStore from './create-store';
import TestSub from './test_sub';

const store = createStore();

export default class Test extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<Provider store={store}>
    		<TestSub/>
    	</Provider>
    );
  }
}