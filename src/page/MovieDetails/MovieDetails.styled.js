import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkStyled = styled(NavLink)`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  width: max-content;
  margin: 4px;
  &:hover {
    background-color: #555;
  }
`;
