import React, { useContext } from 'react';
import { ThemeContext } from 'components/app/index';

export const ThemeToggler = () => {
  const context = useContext(ThemeContext);
  return (
    <select
      id="standard-select"
      name="standard-select"
      defaultValue={context.val}
      onChange={context.selectTheme}>
      <option value="lightTheme">Light theme</option>
      <option value="coloredTheme">Colored theme</option>
      <option value="darkTheme">Dark theme</option>
    </select>
  );
};
