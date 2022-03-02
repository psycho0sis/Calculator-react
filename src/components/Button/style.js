import styled from 'styled-components';
import * as variables from 'styles/variables';

export const MyButton = styled.button`
  display: block;
  width: 100px;
  height: 100px;
  font-size: ${variables.FS_BIG};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  justify-self: center;
  border-radius: 20px;
  border: 1px solid #929292;
  transition: 0.3s all ease;
  &:hover {
    opacity: 0.8;
    transform: scale(0.98);
  }
  &:active {
    background: ${({ theme }) => theme.hover};
    box-shadow: 0 5px #eeeeee;
  }
  &.operation,
  &.function {
    &:hover {
      opacity: 0.8;
      transform: scale(0.98);
    }
    &:active {
      background: ${({ theme }) => theme.hover};
      box-shadow: 0 5px #eeeeee;
    }
  }
  &.operation {
    background: ${({ theme }) => theme.operation};
  }
  &.function {
    background: ${({ theme }) => theme.function};
  }
`;
