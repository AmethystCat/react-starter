import React from 'react';

import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	name: state.name,
	list: state.list,
	attr: state.attr
};

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

export default connect(mapStateToProps)(TestSub);