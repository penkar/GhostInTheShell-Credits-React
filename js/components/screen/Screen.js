import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row.js'

class Screen extends React.Component {
  constructor(props) {
    super(props);
    let string = '';
    for(let i = 0; i < 5; i++) {
      string += Math.random().toString().substr(2, 15);
    }
    this.state = {string, int:0, a:0, z:props.rows};
    this._recycle = this._recycle.bind(this);
    this._rows = this._rows.bind(this);
  }

  static propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    credits: PropTypes.array
  };

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.credits !== this.props.credits){
      this._recycle();
    }
  }

  componentDidMount() {
    let { reps } = this.props.params;
    setInterval( () => {
      this.setState({int: this.state.int + 1});
    }, 1000 / reps );
  }

  _recycle() {
    let {rows} = this.props, {a, z} = this.state;
    this.setState({ a:a + rows, z:z+rows, int:0 });
  }

  _rows() {
    let {cols, rows, credits, params} = this.props, {string, int, a, z} = this.state, array = [];
    for(let i = a; i < z; i++){
      let credit = credits[i - 2 - a];
      array.push(Row({key:i, cols, string, credit, int, params, rec: (a===i ? this._recycle : null)}));
    }
    return array;
  }

  render() {
    let { screen } = this.props.params
    return <div style={screen}>{this._rows()}</div>
  }
}

export {Screen};
