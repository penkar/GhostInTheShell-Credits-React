'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { Counts } from './reducers';
//
// // let store = createStore(Counts);
//
// <Provider store={store}>
// </Provider>,
ReactDOM.render(
    <App height={20} width={50}/>,
	document.getElementById('app')
);
