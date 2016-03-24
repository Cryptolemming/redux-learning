import React, { PropTypes, Component } from 'react';
import DiggIt from './DiggIt';
import Radium from 'radium';

const styles = {
	todoContainer: {
		alignItems: 'center',
		marginTop: '25px',
		color: '#727272',
		alignItems: 'center',
	},
	todoText: {
		fontSize: '28px !important',
		textAlign: 'center',
		fontStyle: 'italic',
		fontFamily: 'cursive !important',
	},
	remove: {
		fontSize: '18px',
		background: '#727272',
		float: 'left',
		background: 'transparent',
		border: 0,
		color: '#727272',
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
					<DiggIt text={item} />
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