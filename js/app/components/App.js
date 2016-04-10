import React from 'react'
import Screen from './screen/Screen.js'

class App extends React.Component {
  componentWillMount() {
    let body = document.getElementsByTagName('body')[0]
    body.style.margin = '0px'
  }

  render() {
    let w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0];
    let x = w.innerWidth || e.clientWidth || g.clientWidth;
    let y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return (
      <div style={{fontFamily:'monospace', fontSize:'1em'}}>
        <Screen rows={parseInt(y/16, 10)} cols={parseInt(x/16, 10)}/>
      </div>
    )
  }
}

export default App
