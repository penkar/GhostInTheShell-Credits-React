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
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { Counts } from './reducers';
//
// // let store = createStore(Counts);
//
// <Provider store={store}>
// </Provider>,
ReactDOM.render(
    <App params={params}/>,
	document.getElementById('app')
);
