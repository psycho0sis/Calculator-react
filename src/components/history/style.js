import styled from 'styled-components';
import * as variables from 'styles/variables';

export const Container = styled.div`
  flex: 0 1 20%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0px 40px;
  &::before {
    position: absolute;
    content: '';
    top: 2%;
    left: 4%;
    width: 1px;
    height: 590px;
    background: #929292;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${variables.FS_MEDIUM};
  color: ${({ theme }) => theme.text};
  margin: 20px 0 20px;
`;

export const Item = styled.p`
  text-align: left;
  font-size: ${variables.FS_REGULAR};
  color: ${({ theme }) => theme.text};
  margin: 25px 0px;
`;

export const FlexEnd = styled.div`
  overflow: auto;
  height: 530px;
`;
