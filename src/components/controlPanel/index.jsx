import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import KeyPad from 'components/Keypad/index';
import Button from 'components/Button/index';

import { operationButtons } from 'constants/buttons';

import { Container } from './style';

class ControlPanel extends PureComponent {
  render() {
    return (
      <Container>
        {operationButtons.map((button) => {
          return (
            <Button
              className={`button_${button.id}`}
              key={button.id}
              value={button.context}
              type={button.type}
              {...this.props}
            />
          );
        })}

        <KeyPad {...this.props} />
      </Container>
    );
  }
}

ControlPanel.propTypes = {
  handleClick: PropTypes.func
};

export default ControlPanel;
