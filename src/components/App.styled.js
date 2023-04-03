import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const NavLinkStyle = styled(NavLink)`
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease-in-out;
  &:hover {
    border-bottom: 2px solid #fff;
  }

  &.active {
    border-bottom: 2px solid #fff;
  }
`;
export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
`;
