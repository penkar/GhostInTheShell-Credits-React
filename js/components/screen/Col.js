import React from 'react'
import PropTypes from 'prop-types'

class Col extends React.Component {
  constructor(props){
    super(props);
    this._click = this._click.bind(this);
    this.state = {bool:true};
  }

  static propTypes = {
    params: PropTypes.object,
    rand: PropTypes.number,
    rec: PropTypes.any,
    str: PropTypes.string,
    tstr: PropTypes.string,
    int: PropTypes.number
  };

  shouldComponentUpdate() {
    return !!this.state.bool;
  }

  componentDidUpdate() {
    let { int, rand } = this.props
    if( rand < ( int/ 50) ){
      return this.setState({ bool:false });
    }
  }

  render() {
    let string, style = this.props.params.col;
    if(this.props.rec){
      return <span style={style} onClick={this._click}>&#x02717;</span>
    } else {
      return <span style={style}>{(this.state.bool && this.props.str) || this.props.tstr || ' '}</span>
    }
  }

  _click() {
    if(this.props.rec) this.props.rec();
  }
}

export default Col;
