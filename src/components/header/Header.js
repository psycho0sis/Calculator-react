import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import './style.scss';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #494949;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 1.4px;
`;

const List = styled.ul`
  margin-left: auto;
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Container>
      <Title>Calculator App</Title>
      <nav className="header__nav">
        <List>
          <NavLink className="linkDiactive" to="/home" activeClassName={'linkActive'}>
            Home
          </NavLink>
          <NavLink className="linkDiactive" to="/settings" activeClassName={'linkActive'}>
            Settings
          </NavLink>
        </List>
      </nav>
    </Container>
  );
};

export default Header;

// "_moduleAliases": {
//   "@root": ".",
//   "@deep": "src/",
//   "@my_module": "lib/",
//   "something": "src/"
// }
