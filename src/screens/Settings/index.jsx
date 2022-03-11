import React from 'react';

import { ThemeToggler } from 'components/ThemeToggler/';
import { ClearButton } from 'components/ClearButton/';

import { Container, Title, CustomSelect, Label } from './style';

export const Settings = () => {
  return (
    <Container>
      <Title>Settings</Title>
      <Label>Swith theme</Label>
      <CustomSelect id="standard-select">
        <ThemeToggler />
      </CustomSelect>
      <ClearButton />
    </Container>
  );
};
