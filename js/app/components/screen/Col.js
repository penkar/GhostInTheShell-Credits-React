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
    if( this.state.bool){
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const {int} = this.props;
    if(!int){
      return this.setState({bool:true});
    }
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

  render() {
    return <span style={this.props.params.col}>{::this._string()}</span>
  }
}

export default Col;
