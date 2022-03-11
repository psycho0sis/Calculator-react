import * as variables from 'styles/variables';

import styled from 'styled-components';

export const Grid = styled.div`
  align-items: center;
  display: grid;
  grid-area: center;
  grid-column-gap: ${variables.SPACES[7]}px;
  grid-row-gap: ${variables.SPACES[4]}px;
  grid-template-columns: repeat(3, ${variables.SPACES[6]}px);
`;
