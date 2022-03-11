import * as variables from 'styles/variables';

import styled from 'styled-components';

const WIDTH = 1;
const HEIGHT = 590;
const LEFT = 4;
const TOP = 2;

export const Container = styled.div`
  display: flex;
  flex: 0 1 20%;
  flex-direction: column;
  position: relative;
  padding: ${variables.SPACES[0]}px ${variables.SPACES[5]}px;

  &::before {
    background: ${variables.COLORS.buttonsBorder};
    content: '';
    height: ${HEIGHT}px;
    left: ${LEFT}%;
    position: absolute;
    top: ${TOP}%;
    width: ${WIDTH}px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: ${variables.FS_MEDIUM}px;
  margin: ${variables.SPACES[2]}px ${variables.SPACES[0]}px;
  text-align: center;
`;

export const Item = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: ${variables.FS_REGULAR}px;
  margin: ${variables.SPACES[3]}px ${variables.SPACES[0]}px;
  text-align: left;
`;

export const FlexEnd = styled.div`
  height: ${HEIGHT}px;
  overflow: auto;
`;
