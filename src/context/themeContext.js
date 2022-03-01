import React from 'react';

export const ThemeContext = React.createContext({
  theme: '',
  val:
    localStorage.getItem('theme') === 'lightTheme'
      ? 'lightTheme'
      : localStorage.getItem('theme') === 'coloredTheme'
      ? 'coloredTheme'
      : localStorage.getItem('theme') === 'darkTheme'
      ? 'darkTheme'
      : 'lightTheme',
  selectTheme: () => {}
});
