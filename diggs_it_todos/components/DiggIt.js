import React, { PropTypes, Component } from 'react';
import Radium from  'radium';

let styles = {
	diggit: {
		background: '#FF4081',
		borderRadius: '50%',
		fontSize: '20px',
		padding: '10px',
		verticalAlign: 'middle',
		color: '#FBFBFB',
		border: '3px solid #028DD1',
	},
	diggitList: {
		textAlign: 'right',
	},
	li: {
		display: 'inline',
	}
}

const DIGGIT_WORDS = ['love', 'music', 'code', 'program', 'learn', 'cool', 'build'];

@Radium
export default class DiggIt extends Component {

	render() {
		var text = this.props.text.toLowerCase();
		var diggit;
		if (DIGGIT_WORDS.some(function(string) {
			return text.indexOf(string) >= 0;})) {
			diggit =
				<ul style={styles.diggitList}>
					<li><i className='fa fa-check' style={styles.diggit}></i>  DIGG-IT!</li>
				</ul>
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
