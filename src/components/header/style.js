import * as variables from 'styles/variables';

import styled from 'styled-components';

const MAX_WIDTH = 1100;
const WIDTH = 180;

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.bgHeader};
  border-top-right-radius: ${variables.SPACES[3]}px;
  border-top-left-radius: ${variables.SPACES[3]}px;
  display: flex;
  justify-content: space-between;
  max-width: ${MAX_WIDTH}px;
  padding: ${variables.SPACES[3]}px;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: ${variables.FS_MEDIUM}px;
  letter-spacing: ${variables.LETTER_SPACING}px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  width: ${WIDTH}px;
`;

export const Nav = styled.nav``;
