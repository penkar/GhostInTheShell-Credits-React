export function ParamGuide( obj ) {
  let full = !!obj.height || !!obj.width;
  let display = full ? 'inline-block' : 'block';
  let params = {
    recover: obj.recover,
    time: obj.time || 5,
    reps: obj.reps || 4,
    len: 5,
    recycle: true,
    app: {
      fontFamily:'monospace',
      fontSize:'1em',
      textAlign:'center',
      color: obj.color || 'green',
      backgroundColor: obj.backgroundColor || 'black',
      display
    },
    screen: {
      display: 'block'
    },
    row: {},
    col: {
      display:"inline-block",
      width:'1em',
      height:'1em'
    }
  };
  if(full){
    params.app.display = 'inline-block';
  }

  return params;
}
