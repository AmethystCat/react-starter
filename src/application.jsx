import React from 'react';
import { Provider } from 'react-redux';
import createStore from './create-store';
import Home from './home';

const store = createStore({
  name: '',
  list: [],
  attr: {}
});

export default class Test extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<Provider store={store}>
    		<Home/>
    	</Provider>
    );
  }
}