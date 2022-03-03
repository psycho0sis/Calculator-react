import React, { memo } from 'react';
import PropTypes from 'prop-types';

import KeyPad from 'components/Keypad/index';
import Button from 'components/Button/index';

import { operationButtons } from 'constants/buttons';

import { Container } from './style';

const ControlPanel = (props) => {
  const { handleClick } = props;

  return (
    <Container>
      {operationButtons.map((button) => {
        return (
          <Button
            className={`button_${button.id}`}
            key={button.id}
            value={button.context}
            type={button.type}
            handleClick={handleClick}
          />
        );
      })}

      <KeyPad handleClick={handleClick} />
    </Container>
  );
};

ControlPanel.propTypes = {
  handleClick: PropTypes.func
};

export default memo(ControlPanel);
