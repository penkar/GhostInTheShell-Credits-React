// @flow
import React from 'react'
export function Rec(rec:any, style:Object) {
  function click(){rec();}
  return <span key="rec" style={style} onClick={click}>&#x02717;</span>
}
