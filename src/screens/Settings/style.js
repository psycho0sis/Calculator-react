import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: #000000;
  letter-spacing: 1.4px;
  margin: 0 0 30px 0;
`;

export const Button = styled.button`
  width: 220px;
  padding: 10px;
  margin: 30px 0 0 0;
  border: 1px solid #000000;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  background: #eeeeee;
  letter-spacing: 1.4px;
  transition: 0.3s all ease;
  &:hover {
    background: #eeeeee;
    transform: scale(0.98);
  }
`;

export const CustomSelect = styled.div`
  margin: 10px 0 0 0;
  select {
    position: relative;
    background-color: transparent;
    border: 1px solid #000000;
    border-radius: 8px;
    width: 220px;
    padding: 10px;
    margin: 0;
    font-size: 20px;
    line-height: inherit;
    transition: 0.3s all ease;
    &:hover {
      background: #eeeeee;
      transform: scale(0.98);
    }
  }
`;

export const Label = styled.label`
  font-size: 16px;
`;
