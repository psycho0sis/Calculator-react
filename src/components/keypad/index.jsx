import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button/index';

import { numberButtons } from 'constants/buttons';

import { Grid } from './style';

class KeyPad extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleClick } = this.props;
    return (
      <Grid>
        {numberButtons.map((button) => {
          return (
            <Button
              key={button.id}
              value={button.context}
              handleClick={handleClick}
              type={button.type}
            />
          );
        })}
      </Grid>
    );
  }
}

KeyPad.propTypes = {
  handleClick: PropTypes.func
};

export default KeyPad;
