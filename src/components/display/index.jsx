import React from 'react';
import PropTypes from 'prop-types';

import { DisplayText } from './style';

const Display = (props) => {
  const { firstValue, memory } = props;

  return <DisplayText id="display">{firstValue ? firstValue : memory}</DisplayText>;
};

Display.propTypes = {
  firstValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  memory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default Display;
