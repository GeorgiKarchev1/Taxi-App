import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.white};
    padding: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">YourName</Logo>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/">Начало</NavLink>
        <NavLink to="/services">Услуги</NavLink>
        <NavLink to="/portfolio">Портфолио</NavLink>
        <NavLink to="/contact">Контакти</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar; 