import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'containers/button/index';

import { numberButtons } from 'constants/buttons';

import { Grid } from './style';

class KeyPad extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        {numberButtons.map((button) => {
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
