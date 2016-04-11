import React, { PropTypes } from 'react'
import Col from './Col.js'
class Row extends React.Component {
  static propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    credits: PropTypes.array,
    string: PropTypes.string
  };
  cols() {
    let array = []
    const {cols, rows} = this.props
    let {string} = this.props;
    let num = parseInt(Math.random() * 140, 10)
    for(let i = 0; i < this.props.cols; i++){
      array.push(<Col key={i} col={i} cols={cols} rows={rows} str={string[(i + num) % 130]}/>)
    }
    return array;
  }

  render() {
    return <div>{::this.cols()}</div>
  }
}

export default Row
