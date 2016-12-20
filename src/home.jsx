import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from './action-creator';


let mapStateToProps = (state) => ({
	name: state.name,
	list: state.list,
	attr: state.attr
});

let mapDispatchToProps = (dispatch) => (bindActionCreators(actionCreators, dispatch));

class TestSub extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>hello react!</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TestSub);