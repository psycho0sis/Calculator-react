import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-column-gap: 90px;
  grid-row-gap: 30px;
  align-items: center;
`;
