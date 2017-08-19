import React from 'react'
import PropTypes from 'prop-types'
import Screen from './screen/Screen.js'
import { ParamGuide } from './params/'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
    this._screenDimension = this._screenDimension.bind(this);
    this._params = this._params.bind(this);
    this._props = this._props.bind(this);
    this._iterate = this._iterate.bind(this);
    this._unIterate = this._unIterate.bind(this);
    this._credits = this._credits.bind(this);
  }

  static propTypes = {
    params: PropTypes.object,
    credits: PropTypes.any
  };

  componentWillMount() {
    let body = document.getElementsByTagName('body')[0];
    body.style.margin = '0px';
  }

  _screenDimension() {
    let w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0];
    let x = w.innerWidth || e.clientWidth || g.clientWidth;
    let y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return {x,y};
  }

  _params() {
    let { height, minHeight, width, minWidth, color, backgroundColor } = this.props.params;
    let obj = {color, backgroundColor};
    if(height || minHeight || width || minWidth){
      obj.full = true;
    }
    return ParamGuide(this.props.params);
  }

  _props() {
    let { height, minHeight, width, minWidth } = this.props.params;
    let { x, y } = ::this._screenDimension();
    let rows =  Math.max(height || parseInt(y/16, 10), minHeight || 0), cols = Math.max(width || parseInt(x/16, 10), minWidth || 0);
    return {rows, cols}
  }

  _iterate() {
    let { count } = this.state;
    this.setState({count:count+1});
  }

  _unIterate() {
    this.setState({count:0});
  }

  _credits(params) {
    let { credits } = this.props, { count } = this.state;
    if( Array.isArray(credits) ) {
      return credits;
    } else {
      if(credits[ count + 1 ]){
        setTimeout( () => { this._iterate() }, 1000 * params.time )
      } else if( params.recover ){
        setTimeout( () => { this._unIterate() }, 1000 * params.time )
      }
      return credits[count];
    }
  }

  render() {
    let { rows, cols } = this._props();
    let params = this._params();
    return (
      <div style={params.app}>
        <Screen rows={ rows } cols={ cols } credits={ this._credits(params) } params={ params }/>
      </div>
    )
  }
}

export default App
