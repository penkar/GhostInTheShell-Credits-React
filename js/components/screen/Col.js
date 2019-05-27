// @flow
import * as React from 'react';
type Props = {
  style: {[string]:string},
  rand: number,
  str: string,
  tstr: string,
  int: number,
}
type State = {
  shouldShow: boolean,
}

export default class Col extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      shouldShow: true
    };
  }

  shouldComponentUpdate() {
    return this.state.shouldShow;
  }

  componentDidUpdate() {
    if( this.props.rand < ( this.props.int/ 50) ) {
      return this.setState({ shouldShow:false });
    }
  }

  render() {
    return (
      <span style={this.props.style}>
        { this.state.shouldShow && this.props.str || this.props.tstr || ' ' }
      </span>
    );
  }
}
