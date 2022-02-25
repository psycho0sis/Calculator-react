import React from 'react';

import History from 'components/history/index';
import Container from 'containers/container/index';

import { FlexContainer } from './style';

const Home = () => {
  return (
    <FlexContainer>
      <Container />
      <History />
    </FlexContainer>
  );
};

export default Home;
