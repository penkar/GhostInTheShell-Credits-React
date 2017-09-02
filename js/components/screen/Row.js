import React from 'react'
import PropTypes from 'prop-types'

import Col from './Col.js'

function Row ({key, cols, int, string, params, credit = '', rec}) {
  let array = [], rand = Math.random();
  let num = parseInt(rand * 60, 10), offset = parseInt((cols - credit.length) / 2, 10);

  for(let i = 0; i < cols; i++){
    let tstr = credit[i - offset];
    array[i] = (
      <Col
        key={i}
        int={int}
        str={string[num + i % 10]}
        tstr={tstr}
        params={params}
        rec={!i ? rec : null}
        rand={rand * i % 1}
      />
    );
  }
  return (
    <div key={key} style={params.row}>
      { array }
    </div>
  )
}

export default Row;
