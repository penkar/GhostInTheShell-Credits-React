import React from 'react'
import Screen from './screen/Screen.js'
import {Full} from './params/'

let credits = [
  "Yeah",
  "I'm in your head",
  "Bitch"
]


class App extends React.Component {
  componentWillMount() {
    // console.log(Full);
    let body = document.getElementsByTagName('body')[0]
    body.style.margin = '0px'
  }

  _dimension() {
    let w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0];
    let x = w.innerWidth || e.clientWidth || g.clientWidth;
    let y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return {x,y};
  }

  _style() {
    return Full;
  }

  render() {
    let {x,y} = ::this._dimension();
    return (
      <div style={Full.app}>
        <Screen rows={parseInt(y/16, 10)} cols={parseInt(x/16, 10)} credits={credits} params={::this._style()}/>
      </div>
    )
  }
}

export default App
