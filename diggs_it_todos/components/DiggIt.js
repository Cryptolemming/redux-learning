import React, { PropTypes, Component } from 'react';
import Radium from  'radium';

let styles = {
	diggit: {
		float: 'right',
		background: '#FF4081',
		borderRadius: '50%',
		fontSize: '12px',
		padding: '10px',
		height: '55px',
		width: '55px',
		verticalAlign: 'middle',
	}
}

const DIGGIT_WORDS = ['love', 'music', 'code', 'program'];

@Radium
export default class DiggIt extends Component {

	render() {
		var text = this.props.text.toLowerCase();
		var diggit;
		if (DIGGIT_WORDS.some(function(string) {
			return text.indexOf(string) >= 0;})) {
			diggit = <p style={styles.diggit}>"DIGGIT!"</p>
		} 
		else {
			diggit = null
		}

		return (
			<div>
				{diggit}
			</div>
		)
	}
}

DiggIt.propTypes = {
	text: PropTypes.string.isRequired
}
