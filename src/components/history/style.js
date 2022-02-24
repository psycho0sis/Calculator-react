import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 1 20%;
  position: relative;
  padding: 0px 40px;
  &::before {
    position: absolute;
    content: '';
    top: 10%;
    left: 4%;
    width: 1px;
    height: 560px;
    background: #929292;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  margin: 20px 0 20px;
`;
