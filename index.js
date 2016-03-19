import { createStore } from 'redux';

const reducer = ((state=0, action) => {
	if(action.type === 'UP') {
		return state + 1;
	}
	return state;
});

// 1) create the store

const store = createStore(reducer);

// 2) get the state

const go = () => {
	document.body.innerText = store.getState();
};

// 3) change the state

document.addEventListener('click', () => {
	store.dispatch({type: 'UP'});
});

// 4) subscribe to state changes

store.subscribe(go);