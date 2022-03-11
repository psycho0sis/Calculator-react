import * as variables from 'styles/variables';

import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 80%;
`;

export const FlexContainer = styled.div`
  display: flex;
  padding: ${variables.SPACES[0]}px ${variables.SPACES[1]}px;
`;

export const Grid = styled.div`
  display: grid;
  padding: ${variables.SPACES[3]}px ${variables.SPACES[5]}px;
`;
