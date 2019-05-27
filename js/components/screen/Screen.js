// @flow
import * as React from 'react'
import Row from './Row.js'

type Props = {
  cols: number,
  credits: string|Array<string>|Array<string>,
  params:Object,
  rows: number,
}
type State = {
  a: number,
  z: number,
  int: number,
  rows: number,
  string: string,
}

export default class Screen extends React.Component<Props, State> {
  constructor(props:Object) {
    super(props);
    let string = '';
    for(let i = 0; i < 5; i++) {
      string += Math.random().toString().substr(2, 15);
    }
    this.state = {
      a:0,
      z:props.rows,
      int:0,
      rows:0,
      string,
    };
  }

  componentWillUpdate (nextProps:Object, nextState:Object) {
    if(nextProps.credits !== this.props.credits){
      let {rows} = this.props, {a, z} = this.state;
      this.setState({ a:a + rows, z:z+rows, int:0 });
    }
  }

  componentDidMount () {
    const reps = this.props.params.reps;
    setInterval(() => this.setState({int: this.state.int + 1}), 1000 / reps );
  }

  render() {
    return (
      <div style={this.props.params.screen}>
        { this.createRows() }
      </div>
    )
  }

  recycleDisplay = (): void => {
    console.log('recycle');
    /* Does nothing */
  }

  createRows = (): React.Node =>  {
    const {cols, rows, credits, params} = this.props, {string, int, a, z} = this.state, array = [];
    for(let i = a; i < z; i++){
      let credit = credits[i - 2 - a];
      array.push(Row({key:i, cols, string, credit, int, params, rec: (a===i ? this.recycleDisplay : null)}));
    }
    return array;
  }
}