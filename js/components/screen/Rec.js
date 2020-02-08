import React from 'react';
import { string, func } from 'prop-types';

export default function Recycle (recycleFunction, style) {
  return <span key="rec" style={style} onClick={recycleFunction}>&#x02717;</span>
}

Recycle.porpTypes = {
  recycleFunction: func,
  style: {[string]: string}
}
