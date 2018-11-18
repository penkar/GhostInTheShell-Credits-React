// @flow
import React from 'react';
import Screen from './screen/Screen';
import ParamGuide from './params/';
type Props = {
  params:Object,
  credits:Any,
}
type State = {
  count:Number,
  x:Number,
  y:Number,
}

export default class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    const w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0];
    const x = w.innerWidth || e.clientWidth || g.clientWidth;
    const y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    this.state = {count:0,x,y};
  }

  componentWillMount = () => {
    let body = document.getElementsByTagName('body')[0];
    body.style.margin = '0px';
  }

  _params = () => {
    let { height, minHeight, width, minWidth, color, backgroundColor } = this.props.params;
    let obj = {color, backgroundColor};
    if(height || minHeight || width || minWidth) {
      obj.full = true;
    }
    return ParamGuide(this.props.params);
  }

  _props = () => {
    let { height, minHeight, width, minWidth } = this.props.params;
    let { x, y } = this.state;
    let rows =  Math.max(height || parseInt(y/16, 10), minHeight || 0), cols = Math.max(width || parseInt(x/16, 10), minWidth || 0);
    return {rows, cols}
  }

  _iterate = () => {
    let { count } = this.state;
    this.setState({count:count+1});
  }

  _unIterate = () => {
    this.setState({count:0});
  }

  _credits = (params) => {
    let { credits } = this.props, { count } = this.state;
    if( Array.isArray(credits) ) {
      return credits;
    } else {
      if(credits[ count + 1 ]){
        setTimeout( function(){this._iterate()}, 1000 * params.time );
      } else if( params.recover ){
        setTimeout( function(){this._unIterate()}, 1000 * params.time );
      }
      return credits[count];
    }
  }

  render() {
    const props = this._props(), params = this._params();
    return (
      <div style={params.app}>
        <Screen {...props} credits={ this._credits(params) } params={ params }/>
      </div>
    );
  }
}
