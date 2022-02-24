import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MyButton } from './style';

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <MyButton>{this.props.value}</MyButton>;
  }
}

Button.propTypes = {
  value: PropTypes.string
};
export default Button;
