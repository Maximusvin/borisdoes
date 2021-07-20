import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  width: 100%;
  padding-left: 20px;
  color: rgba(128, 128, 128, 1);
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 20px rgb(89 102 122 / 10%);

  @media (max-width: 768px) {
    padding: 10px 5px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 25px 0;
  }
`;

export const Logo = styled.img`
  width: 50px;
  margin-right: 30px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin-right: 15px;
`;

export const Title = styled.h3``;
