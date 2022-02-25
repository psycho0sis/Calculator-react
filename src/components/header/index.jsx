import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, List, Title } from 'components/header/style';

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
