import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBd0c0ztbMByrgxtO9hy_1MWyjfFJmRgqQ';

const App = () => {
	return(
		<div>
			<SearchBar />
		</div>
	); 
}

ReactDOM.render(<App />, document.getElementById('container'));