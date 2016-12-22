import React from 'react';

export default class Test extends React.Component {
	constructor(props) {
		super(props);
	}

	addName = () => {
		const { add_name } = this.props.attr;
		add_name('HC11111');
	}

	render() {
	    return (<div>
	    	<button type="button" onClick={this.addName}>name change</button>
	    		<br/>{this.props.attr.name}
	    	</div>);
	}
}