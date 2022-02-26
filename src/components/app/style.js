import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  height: 700px;
  margin: 0 auto;
  box-shadow: -3px 6px 41px -17px rgba(94, 95, 96, 0.23);
  border-radius: 30px;
  background: ${({ theme }) => theme.body};
`;
