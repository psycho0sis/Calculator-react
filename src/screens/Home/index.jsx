import React from 'react';

import { History } from 'components/History/';
import { Container } from 'containers/Container/';
import { ErrorBoundary } from 'components/ErrorBoundary';

import { FlexContainer } from './style';

export const Home = () => {
  return (
    <FlexContainer>
      <Container />
      <ErrorBoundary>
        <History />
      </ErrorBoundary>
    </FlexContainer>
  );
};
