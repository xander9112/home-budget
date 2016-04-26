import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Index from './pages/Index';
import Bill from './pages/Bill';

import {Router, Route, IndexRoute, hashHistory} from "react-router";

const app = document.getElementById('application');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index}></IndexRoute>
			<Route path="bill" component={Bill}></Route>
		</Route>
	</Router>,
	app);

// ReactDOM.render(<App data='data.json'/>, app);
