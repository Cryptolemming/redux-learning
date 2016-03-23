import React, { PropTypes, Component } from 'react';
import DiggIt from './DiggIt';
import Radium from 'radium';

const styles = {
	todo: {
		alignItems: 'center',
		background: '#0288D1',
		padding: '25px',
		margin: '25px',
		borderRadius: '15px',
		color: '#FBFBFB',
		fontSize:  '25px',
	},
	todoText: {

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
				<li key={index} style={styles.todo}>
					<p>{item}</p>
					<button onClick={this.props.remove.bind(null, index)}>Remove</button>
					<DiggIt text={item} />
				</li>
			)
		});

		return (
			<ul style={styles.list}>
				{handleListItems}
			</ul>
		)
	}
}

List.propTypes = {
	items: PropTypes.array.isRequired,
	remove: PropTypes.func.isRequired
}