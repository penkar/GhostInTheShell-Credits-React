import { useState, useEffect } from 'react';
import Row from './Row.js';

interface ScreenInterface {
  cols: number;
  credits: string | string[];
  params: any;
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
  const recycleDisplay = () => console.log('recycle');

  let str = '';
  for (let i = 0; i < 5; i++) {
    str += Math.random().toString().substr(2, 15);
  }

  const array = [];
  for (let i = a; i < z; i++) {
    let credit = credits[i - 2 - a];
    array.push(
      <Row
        key={i}
        cols={cols}
        string={str}
        credit={credit}
        int={int}
        rec={a === i ? recycleDisplay : null}
        params={params}
      />
    );
  }

  useEffect(() => {
    setTimeout(function () {
      setInt(int + 1);
    }, 1000 / params.reps);
  }, [int, setInt]);

  useEffect(() => {
    setA(a + rows);
    setZ(z + rows);
    setInt(0);
  }, [credits]);

  return <div style={params.screen}>{array}</div>;
}
