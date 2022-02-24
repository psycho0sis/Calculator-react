import styled from 'styled-components';

export const MyButton = styled.button`
  display: block;
  width: 100px;
  height: 100px;
  font-size: 32px;
  justify-self: center;
  border-radius: 20px;
  border: 1px solid #929292;
  transition: 0.3s all ease;
  &:hover {
    background: #eeeeee;
    transform: scale(0.98);
  }
  &:active {
    background-color: #767575;
    box-shadow: 0 5px #666;
  }
`;
