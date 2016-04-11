import React, {PropTypes} from 'react'
import Row from './Row.js'

class Screen extends React.Component {
  constructor(props) {
    super(props);
    let string = ::this._numString();
    this.state = {string, interval:0}
  }

  // componentDidMount() {
  //   setInterval( () => {
  //     this.setState({interval: this.state.interval + 1})
  //   }, 200)
  // }

  static propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    credits: PropTypes.array
  };

  _numString() {
    let string = '';
    for(let i = 0; i < 10; i++){
      string += Math.random().toString().substr(2, 15);
    }
    return string;
  }

  _rows() {
    const {cols, rows, credits} = this.props;
    const {string, interval} = this.state;
    let array = [];
    for(let i = 0; i < this.props.rows; i++){
      let credit = credits[i-2]
      array.push(<Row key={i} cols={cols} rows={rows} string={string} int={interval} credit={credit}/>);
    }
    return array;
  }

  render() {//console.log(1,this.state,2,this.props);
    return <div style={{display:'block'}}>{::this._rows()}</div>
  }
}

export default Screen;
