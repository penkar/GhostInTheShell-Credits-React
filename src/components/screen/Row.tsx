import { memo } from 'react';
import Col from './Col.js';
import type { ParamsType } from '../types.js';

interface RowInterface {
  cols: number;
  int: number;
  string: string;
  params: ParamsType;
  credit: string;
}

function Row({ cols, int, string, params, credit = '' }: RowInterface) {
  const array = [];
  const rand = Math.random();
  const num = parseInt(`${rand * 60}`, 10);
  const offset = parseInt(`${(cols - credit.length) / 2}`, 10);

  for (let i = 0; i < cols; i++) {
    const tstr = credit[i - offset];
    array[i] = (
      <Col
        key={i}
        int={int}
        str={string[num + (i % 10)]}
        tstr={tstr}
        style={params.col || {}}
        rand={(rand * i) % 1}
      />
    );
  }
  return <div style={params.row}>{array}</div>;
}

export default memo(Row);
