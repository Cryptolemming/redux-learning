import React, { PropTypes, Component } from 'react';
import DiggIt from './DiggIt';
import Radium from 'radium';

const styles = {
	todoContainer: {
		alignItems: 'center',
		margin: '50px',
		color: '#727272',
		textAlign: 'center',
	},
	todoText: {
		fontSize: '32px !important',
		textAlign: 'center',
		fontStyle: 'italic',
		fontFamily: 'cursive !important',
	},
	remove: {
		fontSize: '18px',
		background: 'transparent',
		border: 0,
		color: '#727272',
	},
	diggit: {
		float: 'right',
	}
}

@Radium
export default class List extends Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		let handleListItems = this.props.items.map((item, index) => {
			return(
				<li key={index} style={styles.todoContainer}>
					<p style={styles.todoText}>'{item}'</p>
					<button style={styles.remove} onClick={this.props.remove.bind(null, index)}>Completed ?</button>
					<DiggIt style={styles.diggit} text={item} />
				</li>
			)
		});

		return (
			<ul>
				{handleListItems}
			</ul>
		)
	}
}

List.propTypes = {
	items: PropTypes.array.isRequired,
	remove: PropTypes.func.isRequired
}