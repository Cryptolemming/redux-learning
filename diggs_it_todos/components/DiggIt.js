import React, { PropTypes, Component } from 'react';

export default class DiggIt extends Component {

	render() {
		return (
			<div>
				<p>I DIGG IT! {this.props.item}</p>
			</div>
		)
	}
}

DiggIt.propTypes = {
	item: PropTypes.string.isRequired
}