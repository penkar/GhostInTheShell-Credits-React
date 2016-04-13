import React, { PropTypes } from 'react'

class Col extends React.Component {
  constructor(props){
    super(props);
    this.state = {bool:true};
  }

  static propTypes = {
    col: PropTypes.number,
    cols: PropTypes.number,
    str: PropTypes.string,
    tstr: PropTypes.string,
    int: PropTypes.number
  };

  shouldComponentUpdate(nextProps, nextState) {
    if( this.state.bool ){
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const {int} = this.props
    if( Math.random() < (int/ 50) ){
      return this.setState({bool:false});
    }
  }

  _string() {
    if(this.state.bool){
      return this.props.str;
    }
    return this.props.tstr;
  }

  _click() {
    if(this.props.rec){
      ::this.props.rec();
    }
  }

  render() {
    return <span style={this.props.params.col} onClick={::this._click}>{::this._string()}</span>
  }
}

export default Col;
