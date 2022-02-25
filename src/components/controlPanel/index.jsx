import React, { Component } from 'react';
import PropTypes from 'prop-types';

import KeyPad from 'components/keypad/index';
import Button from 'containers/button/index';

import { Container, Flex } from './style';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Flex>
          {['C', '-', '+', '.'].map((button) => {
            return <Button key={button} value={button} {...this.props} />;
          })}
        </Flex>
        <KeyPad {...this.props} />
        <Flex>
          {['*', '\\', '=', 'CE'].map((button) => {
            return <Button key={button} value={button} {...this.props} />;
          })}
        </Flex>
      </Container>
    );
  }
}

ControlPanel.propTypes = {
  handleClick: PropTypes.func
};

export default ControlPanel;
