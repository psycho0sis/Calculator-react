import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header } from 'components/Header/';
import { Home } from 'screens/Home/';
import { Settings } from 'screens/Settings/';

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from 'constants/routes';
import { ThemeContext } from 'context/themeContext';
import { pickTheme, selectThemeForProvider } from 'utils/selectTheme';

import { Global } from 'styles/globalStyle';
import { lightTheme } from 'styles/theme';
import { Container } from './style';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: lightTheme,
      val: localStorage.getItem('theme'),
      selectTheme: this.selectTheme
    };
  }

  selectTheme = (e) => {
    const obj = pickTheme(e);
    this.setState(obj);
  };

  render() {
    const { val } = this.state;
    const theme = selectThemeForProvider(val);

    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeProvider theme={theme}>
          <Container>
            <Global />
            <Header />
            <Switch>
              <Route exact path={HOME_PAGE_ROUTE} component={Home} />
              <Route exact path={SETTINGS_PAGE_ROUTE} component={Settings} />
            </Switch>
          </Container>
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}
