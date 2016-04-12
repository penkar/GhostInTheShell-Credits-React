import React, { PropTypes } from 'react'
import Col from './Col.js'

class Row extends React.Component {
  static propTypes = {
    cols: PropTypes.number,
    credit: PropTypes.string,
    string: PropTypes.string,
    int: PropTypes.number
  };

  cols() {
    const { cols, int, string, params } = this.props;
    const credit = this.props.credit || '';
    let array = [];
    let num = parseInt(Math.random() * 140, 10);
    let offset = parseInt((cols - credit.length) / 2, 10);
    for(let i = 0; i < this.props.cols; i++){
      let tstr = credit[i - offset] || ' ';
      array.push(<Col key={i} int={int} str={string[(i + num) % 130]} tstr={tstr} params={params}/>);
    }
    return array;
  }

  render() {
    return <div style={this.props.params.row}>{::this.cols()}</div>
  }
}

export default Row;
