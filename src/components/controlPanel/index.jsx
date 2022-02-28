import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import KeyPad from 'components/keypad/index';
import Button from 'containers/button/index';

import { operationButtons } from 'constants/buttons';

import { Container } from './style';

class ControlPanel extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('render controlPanel');
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
