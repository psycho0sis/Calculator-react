import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MyButton } from './style';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, handleClick, type } = this.props;
    console.log(this.props);
    return (
      <MyButton
        className={`${type || ''}`}
        onClick={handleClick}
        value={value}
        key={value}
        type={type}>
        {value}
      </MyButton>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string
};
export default Button;
