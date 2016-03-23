import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '../components/List';
import AddItem from '../components/AddItem';
import * as TodoActions from '../actions/todoActions';
import Radium from 'radium';

let styles = {
	container: {
		padding: 0,
		margin: 0,
		width: '100vw',
	},
	nav: {
		width: '100vw',
		height: '150px',
		background: '#0288D1',
	},
	header: {
		width: '100%',
		height: '40vh',
		minHeight: '400px',
		background: '#03A9F4',
		color: '#B3E5FC',
		textAlign: 'center',
	},
	title: {
		fontsize: '55',
		padding: '50px',
		color: '#FBFBFB',
	},
	todoAdd: {
		padding: '60px',
		alignItems: 'center',
	},
	todoList: {
		padding: '25px',
		margin: '0 auto',
		width: '55vw',
		minWidth: '250px',
		alignItems: 'center',
	},
}

@Radium
class App extends Component {
	render() {
		const { todos, actions } = this.props 
		return(
			<div className='container'>
				<div styles={styles.nav}>
					<p>nav</p>
				</div>
				<div style={styles.header}>
					<h1 style={styles.title}>DIGG-ITS</h1>
					<div style={styles.todoAdd}>
						<h3>Is your TODO worthy of a DIGG-IT?</h3>
						<h3>Add one to find out</h3>
						<AddItem add={actions.addItem} />
					</div>
				</div>
				<div style={styles.todoList}>
						<List items={todos} remove={actions.removeItem} />
				</div>
			</div>
		)
	}
}

App.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(TodoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)