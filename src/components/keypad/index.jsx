import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/Button/';

import { numberButtons } from 'constants/buttons';

import { Grid } from './style';

export const KeyPad = ({ handleClick }) => {
  return (
    <Grid>
      {numberButtons.map(({ id, context, type }) => {
        return <Button key={id} value={context} handleClick={handleClick} type={type} />;
      })}
    </Grid>
  );
};

KeyPad.propTypes = {
  handleClick: PropTypes.func
};
