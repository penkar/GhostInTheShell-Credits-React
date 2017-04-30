import React from 'react'
import PropTypes from 'prop-types'
import Col from './Col.js'

class Row extends React.Component {
  static propTypes = {
    cols: PropTypes.number,
    credit: PropTypes.string,
    string: PropTypes.string,
    int: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.cols = this.cols.bind(this);
  }

  cols() {
    let { cols, int, string, params } = this.props, credit = this.props.credit || '', array = [], rand = Math.random();
    let num = parseInt(rand * 60, 10), offset = parseInt((cols - credit.length) / 2, 10);
    for(let i = 0; i < this.props.cols; i++){
      let tstr = credit[i - offset] || ' ';
      array.push(
        <Col key={i} int={int}
          str={string[num + i % 10]}
          tstr={tstr} params={params}
          rec={!i ? this.props.rec : null}
          rand={rand * i % 1}
        />
      );
    }
    return array;
  }

  render() {
    return <div style={this.props.params.row}>{ this.cols() }</div>
  }
}

export default Row;
