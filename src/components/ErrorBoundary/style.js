import * as variables from 'styles/variables';

import styled from 'styled-components';

export const ErrorWrapper = styled.h3`
  border-bottom: ${variables.SPACES[1]}px solid ${variables.COLORS.buttonsBorder};
  padding: ${variables.SPACES[5]}px ${variables.SPACES[4]}px ${variables.SPACES[3]}px;
  text-align: right;
`;
