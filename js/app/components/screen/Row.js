import React, { PropTypes } from 'react'
import Col from './Col.js'
class Row extends React.Component {
  static propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    credits: PropTypes.array
  };
  cols() {
    let array = []
    for(let i = 0; i < this.props.cols; i++){
      array.push(<Col key={i} col={i}/>)
    }
    return array;
  }

  render() {
    return (
      <div>{::this.cols()}</div>
    )
  }
}

export default Row
