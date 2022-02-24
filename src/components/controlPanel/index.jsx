import React from 'react';

import KeyPad from 'components/keypad/index';
import Button from 'containers/button/index';

import { Grid, Container, Flex } from './style';

const ControlPanel = () => {
  return (
    <Container>
      <Flex>
        <Button value="C" />
        <Button value="-" />
        <Button value="+" />
        <Button value="." />
      </Flex>
      <Grid>
        <KeyPad />
      </Grid>
      <Flex>
        <Button value="*" />
        <Button value="\" />
        <Button value="=" />
        <Button value="CE" />
      </Flex>
    </Container>
  );
};

export default ControlPanel;
