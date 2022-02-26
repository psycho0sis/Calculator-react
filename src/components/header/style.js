import styled from 'styled-components';
import * as variables from 'variables';

export const Container = styled.div`
  width: 1100px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.bgHeader};
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: ${variables.FS_MEDIUM};
  color: ${({ theme }) => theme.text};
  letter-spacing: 1.4px;
`;

export const List = styled.ul`
  margin-left: auto;
  width: 180px;
  display: flex;
  justify-content: space-between;
`;
