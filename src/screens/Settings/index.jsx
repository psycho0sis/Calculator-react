import React from 'react';
import { Container, Title, Button, CustomSelect, Label } from './style';

const Settings = () => {
  return (
    <Container>
      <Title>Settings</Title>
      <Label htmlFor="standard-select">Swith theme</Label>
      <CustomSelect id="standard-select" className="select-dropdown">
        <select>
          <option value="0" defaultChecked>
            Light theme
          </option>
          <option value="1">Colored theme</option>
          <option value="2">Dark theme</option>
        </select>
      </CustomSelect>
      <Button>Clear All History</Button>
    </Container>
  );
};

export default Settings;
