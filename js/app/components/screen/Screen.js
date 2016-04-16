import React, {PropTypes} from 'react'
import Row from './Row.js'

class Screen extends React.Component {
  constructor(props) {
    super(props);
    let string = ::this._numString();
    this.state = {string, int:0, a:0, z:props.rows};
  }

  static propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    credits: PropTypes.array
  };

  _recycle() {
    let {rows} = this.props
    let {a, z} = this.state;
    this.setState({ a:a + rows, z:z+rows, int:0 });
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({int: this.state.int + 1});
    }, 250);
  }

  _numString() {
    let string = '';
    for(let i = 0; i < 5; i++){
      string += Math.random().toString().substr(2, 15);
    }
    return string;
  }

  _rows() {
    const {cols, rows, credits, params} = this.props;
    const {string, int, a, z} = this.state;
    let array = [];
    for(let i = a; i < z; i++){
      let credit = credits[i - 2 - a];
      array.push(<Row key={i} cols={cols} string={string} credit={credit} int={int} params={params} rec={a===i ? ::this._recycle : null}/>);
    }
    return array;
  }

  render() {
    const {screen} = this.props.params
    return <div style={screen}>{::this._rows()}</div>
  }
}

export default Screen;
