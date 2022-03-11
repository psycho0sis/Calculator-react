import { lightTheme, darkTheme, coloredTheme } from 'styles/theme';

export const pickTheme = (e) => {
  switch (e.target.value) {
    case 'lightTheme': {
      localStorage.setItem('theme', 'lightTheme');
      return {
        theme: lightTheme,
        val: 'lightTheme'
      };
    }
    case 'coloredTheme': {
      localStorage.setItem('theme', 'coloredTheme');
      return {
        theme: coloredTheme,
        val: 'coloredTheme'
      };
    }
    case 'darkTheme': {
      localStorage.setItem('theme', 'darkTheme');
      return {
        theme: darkTheme,
        val: 'darkTheme'
      };
    }
    default:
      return {
        theme: lightTheme,
        val: 'lightTheme'
      };
  }
};

export const selectThemeForProvider = (value) => {
  switch (value) {
    case 'lightTheme':
      return lightTheme;
    case 'darkTheme':
      return darkTheme;
    case 'coloredTheme':
      return coloredTheme;
    default:
      return lightTheme;
  }
};

export const selectThemeForContext = () => {
  switch (localStorage.getItem('theme')) {
    case 'lightTheme':
      return 'lightTheme';
    case 'coloredTheme':
      return 'coloredTheme';
    case 'darkTheme':
      return 'darkTheme';
    default:
      return 'lightTheme';
  }
};
