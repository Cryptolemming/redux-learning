import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

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

const Basement = (props) => {
	const state = props.high;
	return (
		<div>basement! {state}
			<button onClick={props.down}>DOWN</button>
		</div>
	);
}

const Middle = () => {
	return (
		<div>middle! <XBasement /></div>
	);
}

const TopLevel = (props) => {
	const state = props.low;
	return (
		<div>top! {state}
			<button onClick={props.up}>UP</button>
			<Middle />
		</div>
	);
}

const mapState = (state) => {
	return {
		low: state.low
	}
}

const mapDispatch = (dispatch) => {
	return {
		up: () => dispatch({type: 'UP'})
	}
}

const mapStateBasement = (state) => {
	return {
		high: state.high
	}
}

const mapDispatchBasement = (dispatch) => {
	return {
		down: () => dispatch({type: 'DOWN'})
	}
}

const XTopLevel = connect(mapState, mapDispatch)(TopLevel);
const XBasement = connect(mapStateBasement, mapDispatchBasement)(Basement);

render((
	<Provider store={createStore(combineReducers({low: low, high: high}))}>
		<TopLevel />
	</Provider>
), document.getElementById('container')); 
