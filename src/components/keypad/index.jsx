import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'containers/button/index';

import { Grid } from './style';

class KeyPad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('from keypad', this.props);
    const buttons = [
      { id: 1, context: '9' },
      { id: 2, context: '8' },
      { id: 3, context: '7' },
      { id: 4, context: '6' },
      { id: 5, context: '5' },
      { id: 6, context: '4' },
      { id: 7, context: '3' },
      { id: 8, context: '2' },
      { id: 9, context: '1' },
      { id: 10, context: '(' },
      { id: 11, context: '0' },
      { id: 12, context: ')' }
    ];
    return (
      <Grid>
        {buttons.map((button) => {
          return <Button key={button.id} value={button.context} {...this.props} />;
        })}
      </Grid>
    );
  }
}

KeyPad.propTypes = {
  handleClick: PropTypes.func
};

export default KeyPad;
