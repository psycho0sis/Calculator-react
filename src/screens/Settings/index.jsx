import React from 'react';

import { Container, Title, Button, CustomSelect, Label } from './style';
import { ThemeToggler } from 'components/themeToggler/ThemeToggler';

const Settings = () => {
  return (
    <Container>
      <Title>Settings</Title>
      <Label htmlFor="standard-select">Swith theme</Label>
      <CustomSelect id="standard-select" className="select-dropdown">
        <ThemeToggler />
      </CustomSelect>

      <Button>Clear All History</Button>
    </Container>
  );
};

export default Settings;
