import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 3px;
  list-style: none;
  margin: 0 auto 25px;

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(253px, 1fr));
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #555;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  transition: all 0.2s linear;
  height: 150px;

  @media (max-width: 576px) {
    max-width: 100%;
  }
`;
