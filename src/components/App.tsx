import { useState, useEffect } from 'react';
import Screen from './screen/Screen';
import ParamGuide from './params.ts';

import type { AppInterface } from './types';

export default function App({ params, credits }: AppInterface) {
  const {
    backgroundColor,
    color,
    height,
    minHeight,
    minWidth,
    recover,
    time,
    width,
  } = params;
  const e = document.documentElement;
  const g = document.querySelector('body');
  const x: number = window.innerWidth || e.clientWidth || g?.clientWidth || 0;
  const y: number =
    window.innerHeight || e.clientHeight || g?.clientHeight || 0;
  const [count, setCount] = useState(0);

  const paramsObject = ParamGuide({
    backgroundColor: backgroundColor || '',
    color: color || '',
    height: 0,
    width: 0,
    time: 0,
    reps: 0,
    recover: null,
  });

  const rows = Math.max(height || y / 16, 10, minHeight || 0);
  const cols = Math.max(width || x / 16, 10, minWidth || 0);
  const credit = Array.isArray(credits[0]) ? credits[count] : credits;

  useEffect(function () {
    if (g) g.style.margin = '0px';
  }, []);

  useEffect(() => {
    if (credits[count + 1]) {
      setTimeout(() => setCount(count + 1), time * 1000);
    } else if (recover) {
      setTimeout(() => setCount(0), time * 1000);
    }
  }, [setCount, count, recover]);

  return (
    <div style={paramsObject.app as React.CSSProperties}>
      <Screen rows={rows} cols={cols} credits={credit} params={paramsObject} />
    </div>
  );
}
