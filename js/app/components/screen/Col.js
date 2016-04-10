import React, { PropTypes } from 'react'

class Col extends React.Component {
  static propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    credits: PropTypes.array
  };
  render() {
    return (
      <div style={{display:"inline"}}>{this.props.col}</div>
    )
  }
}

export default Col
