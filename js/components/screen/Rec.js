// @flow
import React from 'react'
export function Rec(rec, style) {
  function click(){red();}
  return <span style={style} onClick={click}>&#x02717;</span>
}
