import React, { PropTypes, Component } from 'react';
import Radium from 'radium';

const styles = {
	list: {
		listStypeType: 'none',
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
				<li key={index} style={styles.list}>
					<p>{item}</p>
					<button onClick={this.props.remove.bind(null, index)}>Remove</button>
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