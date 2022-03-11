import styled from 'styled-components';

import * as variables from 'styles/variables';

const MAX_WIDTH = 1100;
const HEIGHT = 700;

export const Container = styled.div`
  background: ${({ theme }) => theme.body};
  border-radius: ${variables.BORDER_RADIUS[2]}px;
  height: ${HEIGHT}px;
  margin: ${variables.SPACES[0]}px auto;
  max-width: ${MAX_WIDTH}px;
  width: 100%;
`;
