import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { KeyPad } from 'components/Keypad/';
import { Button } from 'components/Button/';

import { operationButtons } from 'constants/buttons';

import { Container } from './style';

export const ControlPanel = ({ handleClick }) => {
  return (
    <Container>
      {operationButtons.map(({ id, context, type }) => {
        return <Button key={id} value={context} type={type} handleClick={handleClick} />;
      })}
      <KeyPad handleClick={handleClick} />
    </Container>
  );
};

ControlPanel.propTypes = {
  handleClick: PropTypes.func
};
