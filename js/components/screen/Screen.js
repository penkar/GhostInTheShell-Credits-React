import React, { useState, useEffect } from 'react';
import { any, oneOfType, string, number, arrayOf } from 'prop-types';
import Row from './Row.js';

Screen.propTypes = {
  cols: number,
  credits: oneOfType([
    string, arrayOf(string)
  ]),
  params: any,
  rows: number,
}

export default function Screen ({ cols, credits, params, rows }) {
  const [a, setA] = useState(0);
  const [int, setInt] = useState(0);
  const [z, setZ] = useState(rows);
  /* Does nothing */
  const recycleDisplay = () => console.log('recycle');

  let str = '';
  for(let i = 0; i < 5; i++) {
    str += Math.random().toString().substr(2, 15);
  }

  const array = [];
  for(let i = a; i < z; i++){
    let credit = credits[i - 2 - a];
    array.push(Row({key:i, cols, string: str, credit, int, params, rec: (a===i ? recycleDisplay : null)}));
  }

  useEffect(() => {
    setTimeout(function() {
      setInt(int + 1);
    }, 1000 / params.reps );
  }, [int, setInt]);
  useEffect(() => {
    setA(a + rows);
    setZ(z + rows);
    setInt(0);
  }, [credits]);

  return (<div style={params.screen}>{array}</div>);
}
