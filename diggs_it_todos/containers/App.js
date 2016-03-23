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
		width: '100%',
	},
	linkContainer: {
		display: 'inline-block',
		verticalAlign: 'middle',
		fontSize: '12px',
		fontStyle: 'italic',
		float: 'right',
		margin: 0,
		padding: 0,
	},
	header: {
		margin: 0,
		width: '100%',
		height: '50vh',
		minHeight: '400px',
		background: '#03A9F4',
		color: '#B3E5FC',
		textAlign: 'center',
	},
	title: {
		fontsize: '85px',
		padding: '50px',
		color: '#FBFBFB',
	},
	divider: {
		width: '100%',
		height: '25px',
		background: '#0288D1',
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
	footer: {
		bottom: 0,
		position: 'fixed',
		height: '25px',
		background: 'transparent',
	},
	footerLink: {
		color: '#0288D1',
		fontSize: '12px',
		padding: '15px',
	}
}

@Radium
class App extends Component {
	render() {
		const { todos, actions } = this.props 
		return(
			<div style={styles.container}>
				<div style={styles.header}>
					<h1 style={styles.title}>DIGG-ITS</h1>
					<div style={styles.todoAdd}>
						<h3>Will your TODO earn a DIGG-IT?</h3>
						<h3>Add one to find out</h3>
						<AddItem add={actions.addItem} />
					</div>
				</div>
				<div style={styles.divider}></div>
				<div style={styles.todoList}>
						<List items={todos} remove={actions.removeItem} />
				</div>
				<div style={styles.footer}>
					<a style={styles.footerLink} href='https://www.amoderndev.com'>created by ali ayoub</a> 
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