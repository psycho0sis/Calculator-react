import React, { Component } from 'react';
import PropTypes from 'prop-types';

import addSpaces from 'utils/addSpaces';

import { DisplayText } from './style';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstValue } = this.props;
    return <DisplayText>{addSpaces(firstValue)}</DisplayText>;
  }
}

Display.propTypes = {
  firstValue: PropTypes.string
};
export default Display;
