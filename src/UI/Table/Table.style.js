import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NewsList = styled.ul`
  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #495057;
  padding: 8px;
  border-bottom: 1px solid #eff2f7;
  font-size: 0.8125rem;
  line-height: 1.5;
  transition: all 0.2s linear;

  &:hover {
    background-color: rgba(115, 102, 255, 0.15);
  }
`;

export const Thead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #495057;
  padding: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  background-color: #eff2f7;
`;

export const HeadDateTD = styled.button`
  display: flex;
  align-items: center;
  width: 10%;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
  font-weight: 700;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const HeadTitleTD = styled.button`
  display: flex;
  align-items: center;
  width: 70%;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
  font-weight: 700;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const HeadDomainTD = styled.button`
  display: flex;
  align-items: center;
  width: 20%;
  padding: 10px;
  text-align: left;
  background-color: transparent;
  cursor: pointer;
  font-weight: 700;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const DateTD = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  padding: 10px;
  text-align: left;
  background-color: transparent;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const DomainTD = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  padding: 10px;
  text-align: left;
  background-color: transparent;
  cursor: pointer;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ItemLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 70%;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  background-color: transparent;

  &:first-letter {
    text-transform: uppercase;
  }
`;
