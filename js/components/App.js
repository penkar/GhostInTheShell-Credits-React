
import React, { useState, useEffect } from 'react';
import { arrayOf, boolean, number, shape, string } from 'prop-types';
import Screen from './screen/Screen';
import ParamGuide from './params.js';

export default function App ({ params, credits }) {
  const { backgroundColor, color, height, minHeight, minWidth, recover, time, width } = params;
  const e = document.documentElement;
  const g = document.querySelector('body');
  const x = (window.innerWidth || e.clientWidth || g.clientWidth);
  const y = (window.innerHeight|| e.clientHeight|| g.clientHeight);
  const [ count, setCount ] = useState(0);

  const paramsObject = ParamGuide({
    backgroundColor,
    color,
    full: Boolean(height || minHeight || width || minWidth) || false,
  });

  const rows =  Math.max(height || parseInt(y/16, 10), minHeight || 0);
  const cols = Math.max(width || parseInt(x/16, 10), minWidth || 0);
  const props = { rows, cols };
  const credit = Array.isArray(credits[0]) ? credits[count] : credits;

  useEffect(() => {
    g.style.margin = "0px";
  }, []);

  useEffect(() => {
    if(Array.isArray(credits[0])) {
      if(credits[count + 1]) {
        setTimeout(() => setCount(count + 1) , time * 1000)
      } else if(recover) {
        setTimeout(() => setCount(0) , time * 1000)
      }
    }
  }, [setCount, count, credits, recover, time]);

  return (
    <div style={paramsObject.app}>
      <Screen
        {...props}
        credits={credit}
        params={paramsObject}
      />
    </div>
  );
}
App.propTypes = {
  params: shape({
    backgroundColor: string,
    color: string,
    height: number,
    minHeight: number,
    minWidth: number,
    recover: boolean,
    width: number,
  }),
  credits: arrayOf(string),
}
