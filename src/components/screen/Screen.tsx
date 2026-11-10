import { useState, useEffect } from 'react';

import Row from './Row.js';

import type { ParamsType } from '../types.js';

interface ScreenInterface {
  cols: number;
  credits: string | string[];
  params: ParamsType;
  rows: number;
}

export default function Screen({
  cols,
  credits,
  params,
  rows,
}: ScreenInterface) {
  const [a, setA] = useState(0);
  const [int, setInt] = useState(0);
  const [z, setZ] = useState(rows);
  /* Does nothing */

  let str = '';
  for (let i = 0; i < 5; i++) {
    str += Math.random().toString().substr(2, 15);
  }

  const array = [];
  for (let i = a; i < z; i++) {
    const credit = credits[i - 2 - a];
    array.push(
      <Row
        key={i}
        cols={cols}
        string={str}
        credit={credit}
        int={int}
        params={params}
      />,
    );
  }

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setInt(int + 1);
    }, 1000 / params.reps);

    return () => window.clearTimeout(timeout);
  }, [int, setInt]);

  useEffect(() => {
    setA(a + rows);
    setZ(z + rows);
    setInt(0);
  }, [credits]);

  return <div style={params.screen}>{array}</div>;
}
