import React, { PropTypes, Component } from 'react';

var positive = ['love', 'music', 'code', 'program'];

export default class DiggIt extends Component {

	render() {
		var text = this.props.text.toLowerCase();
		var diggit;
		if (positive.some(function(string) {
			return text.indexOf(string) >= 0;})) {
			diggit = "DIGGIT!"
		} 
		else {
			diggit = "DON'T DIGGIT!"
		}

		return (
			<div>
				<p>{diggit}</p>
			</div>
		)
	}
}

DiggIt.propTypes = {
	text: PropTypes.string.isRequired
}
