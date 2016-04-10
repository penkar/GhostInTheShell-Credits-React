import React, {PropTypes} from 'react'
import Row from './Row.js'

class Screen extends React.Component {
  static propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    credits: PropTypes.array
  };

  _rows() {
    let array = []
    for(let i = 0; i < this.props.rows; i++){
      array.push(<Row key={i} cols={this.props.cols}/>);
    }
    return [array]
  }

  render() {
    return (
      <div style={{display:'block'}}>{::this._rows()}</div>
    )
  }
}

export default Screen;
