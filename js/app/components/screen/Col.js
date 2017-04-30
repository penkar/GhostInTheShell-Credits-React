import React from 'react'
import PropTypes from 'prop-types'

class Col extends React.Component {
  constructor(props){
    super(props);
    this.state = {bool:true};
    this._string = this._string.bind(this);
    this._click = this._click.bind(this);
  }

  static propTypes = {
    col: PropTypes.number,
    cols: PropTypes.number,
    rand: PropTypes.number,
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
    let { int, rand } = this.props
    if( rand < ( int/ 50) ){
      return this.setState({ bool:false });
    }
  }

  _string() {
    if(this.state.bool){
      return this.props.str;
    } else if(this.props.rec){
      return <span onClick={this._click}>&#x02717;</span>
    } else {
      return this.props.tstr;
    }
  }

  _click() {
    if(this.props.rec) this.props.rec();
  }

  render() {
    return <span style={this.props.params.col}>{this._string()}</span>
  }
}

export default Col;
