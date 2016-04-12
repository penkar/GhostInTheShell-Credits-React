import React, { PropTypes } from 'react'

class Col extends React.Component {
  constructor(props){
    super(props);
    this.state = {bool:true};
  }

  static propTypes = {
    col: PropTypes.number,
    cols: PropTypes.number,
    rows: PropTypes.number,
    str: PropTypes.string,
    tstr: PropTypes.string,
    int: PropTypes.number
  };

  shouldComponentUpdate(nextProps, nextState) {
    if( this.state.bool){
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const {cols, col, int} = this.props;
    let avg = cols / 2;
    if( Math.random() < (int/ 50) ){
      this.setState({bool:false});
    }
  }

  _string() {
    if(this.state.bool){
      return this.props.str;
    }
    return this.props.tstr || ' ';
  }

  render() {
    return <div style={{display:"inline-block", width:'1em', height:'1em'}}>{::this._string()}</div>
  }
}

export default Col;
