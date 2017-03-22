import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const Greet = () => {
	return <div>Hey</div>;
};

export default (
	<Route path="/" component={App}>
		<Route path="greet1" component={Greet} />
	</Route>
);