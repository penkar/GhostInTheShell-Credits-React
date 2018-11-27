// @flow
import React from 'react'
export function Rec(rec:Function, style:Object) {
  const click = function(){ rec(); }
  return <span key="rec" style={style} onClick={click}>&#x02717;</span>
}
