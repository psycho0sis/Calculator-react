import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-column-gap: 90px;
  grid-row-gap: 30px;
  align-items: center;
  grid-area: center;
`;
