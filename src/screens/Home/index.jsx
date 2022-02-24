import React from 'react';

import Display from 'components/display/index';
import History from 'components/history/index';
import ControlPanel from 'components/controlPanel/index';

import { Container, FlexContainer, Grid } from './style';

const Home = () => {
  return (
    <FlexContainer>
      <Container>
        <Display />
        <ControlPanel />
      </Container>
      <History />
    </FlexContainer>
  );
};

export default Home;
