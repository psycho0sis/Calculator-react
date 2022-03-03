import React from 'react';
import PropTypes from 'prop-types';

import { MyButton } from './style';

const Button = (props) => {
  const { value, handleClick, type } = props;

  return (
    <MyButton
      className={`${type || ''}`}
      onClick={() => handleClick(value)}
      value={value}
      key={value}
      type={type}
      data-name={value === '.' ? 'coma' : null}>
      {value}
    </MyButton>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string
};
export default Button;
