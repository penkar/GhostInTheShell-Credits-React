// @flow
import React from 'react'
import Row from './Row.js'

type Props = {
  cols: Number,
  credits: Array<String>,
  params:Object,
  rows: Number,
}
type State = {
  a:Number,
  int:Number,
  rows:Number,
  string:String,
}

export default class Screen extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    let string = '';
    for(let i = 0; i < 5; i++) {
      string += Math.random().toString().substr(2, 15);
    }
    this.state = {
      string,
      int:0,
      a:0,
      z:props.rows,
    };
  }

  componentWillUpdate (nextProps, nextState) {
    if(nextProps.credits !== this.props.credits){
      let {rows} = this.props, {a, z} = this.state;
      this.setState({ a:a + rows, z:z+rows, int:0 });
    }
  }

  componentDidMount () {
    const { reps } = this.props.params;
    setInterval( () => {
      this.setState({int: this.state.int + 1});
    }, 1000 / reps );
  }

  render () {
    let { screen } = this.props.params
    return <div style={screen}>{this._rows()}</div>
  }
  
  _rows = () =>  {
    let {cols, rows, credits, params} = this.props, {string, int, a, z} = this.state, array = [];
    for(let i = a; i < z; i++){
      let credit = credits[i - 2 - a];
      array.push(Row({key:i, cols, string, credit, int, params, rec: (a===i ? this._recycle : null)}));
    }
    return array;
  }
}

export {Screen};
