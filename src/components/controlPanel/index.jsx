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
    const buttons = [
      [
        { id: 1, context: 'C', type: 'function' },
        { id: 2, context: '-', type: 'operation' },
        { id: 3, context: '+', type: 'operation' },
        { id: 4, context: '.' }
      ],
      [
        { id: 1, context: '*', type: 'operation' },
        { id: 2, context: '/', type: 'operation' },
        { id: 3, context: '=', type: 'operation' },
        { id: 4, context: 'CE', type: 'function' }
      ]
    ];
    return (
      <Container>
        <Flex>
          {buttons[0].map((button) => {
            return (
              <Button key={button.id} value={button.context} type={button.type} {...this.props} />
            );
          })}
        </Flex>
        <KeyPad {...this.props} />
        <Flex>
          {buttons[1].map((button) => {
            return (
              <Button key={button.id} value={button.context} type={button.type} {...this.props} />
            );
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
