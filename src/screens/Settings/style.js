import styled from 'styled-components';

import * as variables from 'variables';

export const Container = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.text};
`;

export const Title = styled.h2`
  font-size: ${variables.FS_BIG};
  font-weight: ${variables.FW_NORMAL}
  color: ${({ theme }) => theme.text};
  letter-spacing: 1.4px;
  margin: 0 0 30px 0;
`;

export const Button = styled.button`
  width: 220px;
  padding: 10px;
  margin: 30px 0 0 0;
  border: 1px solid #000000;
  border-radius: 8px;
  font-size: ${variables.FS_REGULAR};
  font-weight: ${variables.FW_NORMAL};
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  letter-spacing: 1.4px;
  transition: 0.4s all ease;
  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: scale(0.98);
  }
`;

export const CustomSelect = styled.div`
  margin: 10px 0 0 0;
  select {
    position: relative;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    border: 1px solid #000000;
    border-radius: 8px;
    width: 220px;
    padding: 10px;
    margin: 0;
    font-size: ${variables.FS_REGULAR};
    line-height: inherit;
    transition: 0.4s all ease;
    &:hover {
      background: ${({ theme }) => theme.hover};
      transform: scale(0.98);
    }
  }
`;

export const Label = styled.label`
  font-size: ${variables.FS_SMALL};
`;
