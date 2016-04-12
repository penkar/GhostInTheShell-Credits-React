import React, { PropTypes } from 'react'
import Screen from './screen/Screen.js'
import {Full} from './params/'

let credits = [
  "Ghost in the Shell 1995 Opening Credits",
  "By Jeffrey Penkar",
  "http://jspenkar.com"
];


class App extends React.Component {
  static propTypes = {
    height: PropTypes.number,
    minHeight: PropTypes.number,
    width: PropTypes.number,
    minWidth: PropTypes.number,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string
  };

  componentWillMount() {console.log(this.props.height);
    let body = document.getElementsByTagName('body')[0];
    body.style.margin = '0px';
  }

  _screenDimension() {
    let w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0];
    let x = w.innerWidth || e.clientWidth || g.clientWidth;
    let y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return {x,y};
  }

  _style() {
    return Full;
  }

  _props() {
    const { height, minHeight, width, minWidth } = this.props;
    let { x, y } = ::this._screenDimension();
    let rows =  Math.max(height || parseInt(y/16, 10), minHeight || 0), cols = Math.max(width || parseInt(x/16, 10), minWidth || 0);
    return {rows, cols}
  }

  render() {
    let {rows, cols} = ::this._props();
    return (
      <div style={Full.app}>
        <Screen rows={rows} cols={cols} credits={credits} params={::this._style()}/>
      </div>
    )
  }
}

export default App
