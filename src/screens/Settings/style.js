import * as variables from 'styles/variables';

import styled from 'styled-components';

const WIDTH = 220;

export const Container = styled.div`
  color: ${({ theme }) => theme.text};
  padding: ${variables.SPACES[3]}px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: ${variables.FS_BIG}px;
  font-weight: ${variables.FW_NORMAL}
  letter-spacing: ${variables.LETTER_SPACING}px;
  margin-bottom: ${variables.SPACES[3]}px;
`;

export const CustomSelect = styled.div`
  margin-top: ${variables.SPACES[2]}px;
  select {
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: ${variables.BORDER_RADIUS[0]}px;
    color: ${({ theme }) => theme.text};
    font-size: ${variables.FS_REGULAR}px;
    line-height: inherit;
    margin: ${variables.SPACES[0]}px;
    padding: ${variables.SPACES[2]}px;
    position: relative;
    transition: 0.4s all ease;
    width: ${WIDTH}px;

    &:hover {
      background: ${({ theme }) => theme.hover};
      transform: scale(${variables.SCALE});
    }
  }
`;

export const Label = styled.p`
  font-size: ${variables.FS_SMALL}px;
`;
