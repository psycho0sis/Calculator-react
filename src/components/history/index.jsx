import React from 'react';

import Calculator from 'utils/calculator';

import { Container, Title } from './style';

const History = () => {
  const calculator = new Calculator();
  return (
    <Container>
      <Title>History</Title>
      <div>{calculator.history}</div>
    </Container>
  );
};

export default History;
