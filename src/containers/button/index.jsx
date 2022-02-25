import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MyButton } from './style';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, handleClick } = this.props;
    return (
      <MyButton onClick={handleClick} value={value} key={value}>
        {value}
      </MyButton>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func
};
export default Button;
