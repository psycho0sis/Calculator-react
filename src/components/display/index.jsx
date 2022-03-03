import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DisplayText } from './style';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstValue, memory } = this.props;
    return <DisplayText id="display">{firstValue ? firstValue : memory}</DisplayText>;
  }
}

Display.propTypes = {
  firstValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  memory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default Display;
