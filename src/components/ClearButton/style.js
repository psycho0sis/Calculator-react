import styled from 'styled-components';

import * as variables from 'styles/variables';

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
