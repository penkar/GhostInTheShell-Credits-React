import React from 'react'
import PropTypes from 'prop-types'

import {Col} from './Col.js'
import {Rec} from './Rec.js'

function Row ({key, cols, int, string, params, credit = '', rec}) {
  let array = [], rand = Math.random();
  let num = parseInt(rand * 60, 10), offset = parseInt((cols - credit.length) / 2, 10);

  for(let i = 0; i < cols; i++) {
    let tstr = credit[i - offset];
    if(!i && rec) {
      array[i] = Rec(rec, params.col);
    } else {
      array[i] = (
        <Col
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
