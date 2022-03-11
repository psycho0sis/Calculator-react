import React, { useContext } from 'react';

import { ThemeContext } from 'context/themeContext';

import { options } from 'constants/options';

import { Select, Option } from './style';

export const ThemeToggler = () => {
  const { val, selectTheme } = useContext(ThemeContext);

  return (
    <Select id="standard-select" defaultValue={val} onChange={selectTheme}>
      {options.map(({ id, content, value }) => {
        return (
          <Option key={id} value={value}>
            {content}
          </Option>
        );
      })}
    </Select>
  );
};
