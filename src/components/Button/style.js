import * as variables from 'styles/variables';

import styled from 'styled-components';

const WIDTH = 100;

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.background};
  border-radius: ${variables.BORDER_RADIUS[1]}px;
  border: 1px solid ${variables.COLORS.buttonsBorder};
  color: ${({ theme }) => theme.text};
  display: block;
  font-size: ${variables.FS_BIG}px;
  height: ${WIDTH}px;
  justify-self: center;
  transition: 0.3s all ease;
  width: ${WIDTH}px;

  &:hover {
    opacity: ${variables.OPACITY[0]};
    transform: scale(${variables.SCALE});
  }

  &:active {
    background: ${({ theme }) => theme.hover};
    box-shadow: 0 5px ${variables.COLORS.buttonShodow};
  }

  &.operation,
  &.function {
    &:hover {
      opacity: ${variables.OPACITY[0]};
      transform: scale(${variables.SCALE});
    }

    &:active {
      background: ${({ theme }) => theme.hover};
      box-shadow: 0 5px ${variables.COLORS.buttonShodow};
    }
  }

  &.operation {
    background: ${({ theme }) => theme.operation};
  }

  &.function {
    background: ${({ theme }) => theme.function};
  }
`;
