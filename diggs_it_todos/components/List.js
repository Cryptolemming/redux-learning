import React, { PropTypes, Component } from 'react';

export default class List extends Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		let handleListItems = this.props.items.map((item, index) => {
			return(
				<li key={index}>
					<span onclick={this.props.remove.bind(null, index)}></span>
					<span>{item}</span>
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