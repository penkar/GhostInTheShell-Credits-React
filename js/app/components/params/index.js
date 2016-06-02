export function ParamGuide( obj ) {
  if(!obj.height && !obj.width){
    let ghost = document.getElementById('ghost');
    let body = document.getElementsByTagName('body')[0];
    let html = document.getElementsByTagName('html')[0];
    ghost.style.height = '100%';
    body.style.height = '100%';
    html.style.height = '100%';
  }
  let full = !!obj.height || !!obj.width;
  let display = full ? 'inline-block' : 'block';
  let params = {
    recover: obj.recover,
    time: obj.time || 5,
    reps: obj.reps || 4,
    len: 5,
    recycle: true,
    app: {
      height: (!obj.height && !obj.width ? '100%' : ''),
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