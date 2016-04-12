import React from 'react'
import Screen from './screen/Screen.js'

let credits = [
  'Producer',
  'John Smith'
]


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
      <div style={{fontFamily:'monospace', fontSize:'1em', textAlign:'center', color:'green', backgroundColor:'black'}}>
        <Screen rows={parseInt(y/30, 10)} cols={parseInt(x/16, 10)} credits={credits}/>
      </div>
    )
  }
}

export default App
