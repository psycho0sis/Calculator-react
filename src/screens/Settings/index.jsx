import React from 'react';

import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import ClearButton from 'components/ClearButton/index';

import { Container, Title, CustomSelect, Label } from './style';

const Settings = () => {
  return (
    <Container>
      <Title>Settings</Title>
      <Label htmlFor="standard-select">Swith theme</Label>
      <CustomSelect id="standard-select" className="select-dropdown">
        <ThemeToggler />
      </CustomSelect>

      <ClearButton />
    </Container>
  );
};

export default Settings;
