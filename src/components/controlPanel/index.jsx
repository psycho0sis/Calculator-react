import React, { Component } from 'react';
import PropTypes from 'prop-types';

import KeyPad from 'components/keypad/index';
import Button from 'containers/button/index';

import { Grid, Container, Flex } from './style';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick } = this.props;
    return (
      <Container>
        <Flex>
          <Button value="C" handleClick={handleClick} />
          <Button value="-" handleClick={handleClick} />
          <Button value="+" handleClick={handleClick} />
          <Button value="." handleClick={handleClick} />
        </Flex>
        <Grid>
          <KeyPad handleClick={handleClick} />
        </Grid>
        <Flex>
          <Button value="*" handleClick={handleClick} />
          <Button value="\" handleClick={handleClick} />
          <Button value="=" handleClick={handleClick} />
          <Button value="CE" handleClick={handleClick} />
        </Flex>
      </Container>
    );
  }
}

ControlPanel.propTypes = {
  handleClick: PropTypes.func
};

export default ControlPanel;
