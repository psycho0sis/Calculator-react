import * as variables from 'styles/variables';

import styled from 'styled-components';

const BORDER = 1;
const WIDTH = 220;

export const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: ${BORDER}px solid ${({ theme }) => theme.text};
  border-radius: ${variables.BORDER_RADIUS[0]}px;
  color: ${({ theme }) => theme.text};
  font-size: ${variables.FS_REGULAR}px;
  font-weight: ${variables.FW_NORMAL};
  letter-spacing: ${variables.LETTER_SPACING}px;
  margin-top: ${variables.SPACES[3]}px;
  padding: ${variables.SPACES[2]}px;
  transition: 0.4s all ease;
  width: ${WIDTH}px;

  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: scale(${variables.SCALE});
  }
`;
