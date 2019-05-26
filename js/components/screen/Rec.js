// @flow
import * as React from 'react'
const Recycle = (recycleFunction:()=>any, style:{[string]:string}): React.Node => 
  <span key="rec" style={style} onClick={recycleFunction}>&#x02717;</span>

export default Recycle