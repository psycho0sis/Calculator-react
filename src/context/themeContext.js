import React from 'react';

export const ThemeContext = React.createContext({
  theme: '',
  val: 'lightTheme',
  selectTheme: () => {}
});
