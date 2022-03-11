import React from 'react';

import { selectThemeForContext } from 'utils/selectTheme';

export const ThemeContext = React.createContext({
  theme: '',
  val: selectThemeForContext(),
  selectTheme: () => {}
});
