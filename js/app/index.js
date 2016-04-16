'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/';
let params = {
  height:0,
  width:0,
  minHeight:0,
  minWidth:0,
  color:null,
  backgroundColor:null
};

let credits = [
  "Ghost in the Shell 1995 Opening Credits",
  "By Jeffrey Penkar",
  "http://jspenkar.com"
];

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { Counts } from './reducers';
//
// // let store = createStore(Counts);
//
// <Provider store={store}>
// </Provider>,
ReactDOM.render(
    <App params={params} credits={credits}/>,
	document.getElementById('app')
);
