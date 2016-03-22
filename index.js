import React from 'react';
import render from 'react-dom';
import { Provider } from 'react-redux';
import App from './diggs_it_todos/containers/app';
import configureStore from './diggs_it_todos/store/configureStore';

const store = configureStore()

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('container')
)