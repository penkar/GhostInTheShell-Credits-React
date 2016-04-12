import React, { PropTypes } from 'react'
import Col from './Col.js'

class Row extends React.Component {
  static propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    credit: PropTypes.string,
    string: PropTypes.string,
    int: PropTypes.number
  };

  cols() {
    const { cols, rows, int, string } = this.props;
    const credit = this.props.credit || '';
    let array = [], num = parseInt(Math.random() * 140, 10);
    let offset = (cols - credit.length || 0) / 2;
    for(let i = 0; i < this.props.cols; i++){
      let tstr = credit[i - offset] || ' ';
      array.push(<Col key={i} int={int} col={i} cols={cols} rows={rows} str={string[(i + num) % 130]} tstr={tstr}/>);
    }
    return array;
  }

  render() {
    return <div>{::this.cols()}</div>
  }
}

export default Row;
