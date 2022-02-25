import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'containers/button/index';

import { Grid } from './style';

class KeyPad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        {['9', '8', '7', '6', '5', '4', '3', '2', '1', '(', '0', ')'].map((button) => {
          return <Button key={button} value={button} {...this.props} />;
        })}
      </Grid>
    );
  }
}

KeyPad.propTypes = {
  handleClick: PropTypes.func
};

export default KeyPad;
