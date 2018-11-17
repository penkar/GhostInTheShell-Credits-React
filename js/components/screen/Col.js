import React from 'react'
// import PropTypes from 'prop-types'

class Col extends React.Component {
  constructor(props){
    super(props);
    this.state = {bool:true};
  }

  // static propTypes = {
  //   style: PropTypes.object,
  //   rand: PropTypes.number,
  //   str: PropTypes.string,
  //   tstr: PropTypes.string,
  //   int: PropTypes.number
  // };

  shouldComponentUpdate() {
    return this.state.bool;
  }

  componentDidUpdate() {
    let { int, rand } = this.props
    if( rand < ( int/ 50) ){
      return this.setState({ bool:false });
    }
  }

  render() {
    return <span style={this.props.style}>{(this.state.bool && this.props.str) || this.props.tstr || ' '}</span>
  }
}

export {Col};
