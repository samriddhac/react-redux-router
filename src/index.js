import React from 'react';
import ReactDOM from 'react-dom';

//import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';
//import ReduxPromise from 'redux-promise';
//import thunk from 'redux-thunk';

//import reducers from './reducers';

import store from './store';
import routes from './routes';

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
ReactDOM.render(
<Provider store={ store }>
	<Router history={browserHistory} routes={routes} />
</Provider>,
document.querySelector('.container'));