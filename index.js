import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './diggs_it_todos/containers/App';
import configureStore from './diggs_it_todos/store/configureStore';

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)