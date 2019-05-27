// @flow
import * as React from 'react'
import Column from './Col.js'
import Recycle from './Rec.js'

type RowType = {
  key: number,
  cols: number,
  int: number,
  string: string,
  params: {
    app: {[string]: string},
    col: {[string]: string},
    row: {[string]: string},
    screen: {[string]: string},
    len: number,
    recover: boolean,
    recycle: boolean,
    reps: number,
  },
  credit: string,
  rec: ?()=>any,
}

const Row = ({key, cols, int, string, params, credit = '', rec}:RowType): React.Node => {
  const array = [], rand = Math.random(),
    num = parseInt(rand * 60, 10), 
    offset = parseInt((cols - credit.length) / 2, 10);

  for(let i = 0; i < cols; i++) {
    let tstr = credit[i - offset];
    if(!i && rec) {
      array[i] = Recycle(rec, params.col);
    } else {
      array[i] = (
        <Column
          key={i}
          int={int}
          str={string[num + i % 10]}
          tstr={tstr}
          style={params.col}
          rand={rand * i % 1}
          />
      );
    }
  }
  return (
    <div key={key} style={params.row}>
      { array }
    </div>
  )
}

export default Row;
