import React, { PropTypes } from 'react'
import Screen from './screen/Screen.js'
import { ParamGuide } from './params/'

class App extends React.Component {
  static propTypes = {
    params: PropTypes.object,
    credits: PropTypes.array
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
    const { height, minHeight, width, minWidth, color, backgroundColor } = this.props.params;
    let obj = {color, backgroundColor};
    if(height || minHeight || width || minWidth){
      obj.full = true;
    }
    return ParamGuide(this.props.params);
  }

  _props() {
    const { height, minHeight, width, minWidth } = this.props.params;
    let { x, y } = ::this._screenDimension();
    let rows =  Math.max(height || parseInt(y/16, 10), minHeight || 0), cols = Math.max(width || parseInt(x/16, 10), minWidth || 0);
    return {rows, cols}
  }

  render() {
    let {rows, cols} = ::this._props();
    let params = ::this._params();
    return (
      <div style={params.app}>
        <Screen rows={rows} cols={cols} credits={this.props.credits} params={params}/>
      </div>
    )
  }
}

export default App
