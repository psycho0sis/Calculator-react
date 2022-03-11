import * as variables from 'styles/variables';

import styled from 'styled-components';

const HEIGHT = 80;

export const DisplayText = styled.div`
  border-bottom: ${variables.SPACES[1]}px solid ${variables.COLORS.buttonsBorder};
  font-weight: ${variables.FW_NORMAL};
  font-size: ${variables.FS_MEDIUM}px;
  height: ${HEIGHT}px;
  padding: ${variables.SPACES[5]}px ${variables.SPACES[4]}px ${variables.SPACES[3]}px;
  text-align: right;
  width: 100%;
`;
