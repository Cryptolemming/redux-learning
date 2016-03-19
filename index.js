import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';

const low = ((state=0, action) => {
	if(action.type === 'UP') {
		return state + 1;
	}
	return state;
});

const high = ((state=9, action) => {
	if(action.type === 'DOWN') {
		return state - 1;
	}
	return state;
});

class Basement extends React.Component {
	render() {
		var store = this.context.store;
		var state = store.getState().high;
		return (
			<div>basement! {state}
				<button onClick={() => { store.dispatch({type: 'DOWN'}) }}>DOWN</button>
			</div>
		);
	}
}

Basement.contextTypes = {
	store: React.PropTypes.object
}

class Middle extends React.Component {
	render() {
		return (
			<div>middle! <Basement /></div>
		);
	}
}

class TopLevel extends React.Component {
	componentDidMount() {
		const store = this.context.store;
		store.subscribe(() => {
			this.forceUpdate();
		});
	}
	render() {
		const store = this.context.store;
		const state = store.getState().low;
		return (
			<div>top! {state}
				<button onClick={() => { store.dispatch({type: 'UP'}) }}>UP</button>
				<Middle store={store} />
			</div>
		);
	}
};

TopLevel.contextTypes = {
	store: React.PropTypes.object
}

class Provider extends React.Component {
	// pass the state to itself as a prop
	getChildContext() {
		return {
			store: this.props.store
		}
	}
	render() {
		// the HTML from the TopLevel component
		return this.props.children;
	}
};

// set childContext types for the Provider
Provider.childContextTypes = {
	store: React.PropTypes.object
}

render((
	<Provider store={createStore(combineReducers({low: low, high: high}))}>
		<TopLevel />
	</Provider>
), document.getElementById('container')); 
