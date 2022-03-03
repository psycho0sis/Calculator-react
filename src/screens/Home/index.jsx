import React from 'react';

import History from 'components/History/index';
import Container from 'containers/Container/index';
import ErrorBoundary from 'components/ErrorBoundary/index';

import { FlexContainer } from './style';

const Home = () => {
  return (
    <FlexContainer>
      <Container />
      <ErrorBoundary>
        <History />
      </ErrorBoundary>
    </FlexContainer>
  );
};

export default Home;
