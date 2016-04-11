import React, { PropTypes } from 'react'

class Col extends React.Component {
  constructor(props){
    super(props)
    this.state = {bool:true}
  }

  static propTypes = {
    col: PropTypes.number,
    cols: PropTypes.number,
    rows: PropTypes.number,
    str: PropTypes.string
  };

  componentDidUpdate() {
    if(this.state){
      const {cols, col, rows, str} = this.props
      let avg = cols/2;
      if( Math.random() < (col%avg)/cols){
        this.setState({bool:false})
      }
    }
  }

  _string() {
    if(this.state.bool){
      return this.props.str;
    } else {
      return ' ';
    }
  }

  render() {
    if(this.props.col === 0){
      console.log(this.state, this.props)
    };
    return <div style={{display:"inline"}}>{::this._string()}</div>
  }
}

export default Col
