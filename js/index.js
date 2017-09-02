'use strict';
import React from 'react';
import {render} from 'react-dom';

import {App} from './components/';

let params = {
  recover: false,
  time: 6,
  reps: 4,
  height: 0,
  width: 0,
  minHeight: 0,
  minWidth: 0,
  color: null,
  backgroundColor: null
};

let credits = [
  "Ghost in the Shell 1995 Opening Credits",
  "By Jeffrey Penkar",
  "http://jspenkar.com"
];

let credits2 = {
  0: [
    "Ghost in the Shell 1995 Opening Credits"
  ],
  1: [
    "Ghost in the Shell 1995 Opening Credits",
    "By Jeffrey Penkar",
    "https://github.com/penkar",
    "http://jspenkar.com"
  ]
};

render(
  <App params={ params } credits={ credits }/>,
  document.getElementById('ghost')
);
