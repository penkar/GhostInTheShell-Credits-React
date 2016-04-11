import React, { PropTypes } from 'react'
import Col from './Col.js'

class Row extends React.Component {
  static propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    credit: PropTypes.array,
    string: PropTypes.string,
    int: PropTypes.number
  };

  cols() {
    const { cols, rows, int, credit } = this.props;
    let array = [], num = parseInt(Math.random() * 140, 10);
    console.log(credit);
    let { string } = this.props;
    for(let i = 0; i < this.props.cols; i++){
      array.push(<Col key={i} int={int} col={i} cols={cols} rows={rows} str={string[(i + num) % 130]}/>)
    }
    return array;
  }

  render() {console.log(this.props);
    return <div>{::this.cols()}</div>
  }
}

export default Row
