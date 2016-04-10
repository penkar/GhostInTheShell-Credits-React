import React, {PropTypes} from 'react'

class Screen extends React.Component {
  static propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number
  };

  _rows() {
    return [this.props.cols, this.props.rows]
  }

  render() {console.log(this.props);
    return (
      <div>Screen{::this._rows()}</div>
    )
  }
}

export default Screen;
