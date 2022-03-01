import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DisplayText } from './style';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstValue } = this.props;
    return <DisplayText>{firstValue}</DisplayText>;
  }
}

Display.propTypes = {
  firstValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default Display;
