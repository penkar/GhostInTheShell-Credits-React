// @flow
type Params = {
  height:number,
  width:number,
  color:string,
  time:number,
  reps:number,
  recover:Function,
  backgroundColor:string,
}
type Element = {
  style:{[string]:string},
}

const ParamGuide = ( obj:Params ) =>  {
  if(!obj.height && !obj.width){
    const ghost: Element = document.getElementById('ghost');
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    ghost.style.height = '100%';
    body.style.height = '100%';
    html.style.height = '100%';
  }
  const full = !!obj.height || !!obj.width;
  const display = full ? 'inline-block' : 'block';
  const params = {
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
  if(full) params.app.display = 'inline-block';

  return params;
}

export default ParamGuide;
