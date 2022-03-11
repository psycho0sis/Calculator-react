import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, List, Title, Nav } from 'components/Header/style';

import { links } from 'constants/links';

export const Header = () => {
  return (
    <Container>
      <Title>Calculator App</Title>
      <Nav>
        <List>
          {links.map(({ id, className, content, link }) => {
            return (
              <NavLink className={className} key={id} exact activeClassName="linkActive" to={link}>
                {content}
              </NavLink>
            );
          })}
        </List>
      </Nav>
    </Container>
  );
};
