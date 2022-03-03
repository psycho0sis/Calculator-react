import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'components/Header/index';
import Home from 'screens/Home/index';
import Settings from 'screens/Settings/index';

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from 'constants/router';

import { Container } from './style';
import { Global } from 'styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, coloredTheme } from 'styles/theme';

import { ThemeContext } from 'context/themeContext';

class App extends Component {
  selectTheme = (e) => {
    switch (e.target.value) {
      case 'lightTheme': {
        localStorage.setItem('theme', 'lightTheme'),
          this.setState({
            theme: lightTheme,
            val: 'lightTheme'
          });
        break;
      }
      case 'coloredTheme': {
        localStorage.setItem('theme', 'coloredTheme'),
          this.setState({
            theme: coloredTheme,
            val: 'coloredTheme'
          });
        break;
      }
      case 'darkTheme': {
        localStorage.setItem('theme', 'darkTheme'),
          this.setState({
            theme: darkTheme,
            val: 'darkTheme'
          });
        break;
      }
      default:
        this.setState({
          theme: lightTheme,
          val: 'lightTheme'
        });
    }
  };

  state = {
    theme: lightTheme,
    val: localStorage.getItem('theme'),
    selectTheme: this.selectTheme
  };

  render() {
    const { val } = this.state;

    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeProvider
          theme={
            val === 'lightTheme'
              ? lightTheme
              : val === 'darkTheme'
              ? darkTheme
              : val === 'coloredTheme'
              ? coloredTheme
              : lightTheme
          }>
          <Global />
          <Container>
            <Header />
            <main>
              <Switch>
                <Route exact path={HOME_PAGE_ROUTE} component={Home} />
                <Route exact path={SETTINGS_PAGE_ROUTE} component={Settings} />
                <Redirect
                  to={{
                    pathname: '/home'
                  }}
                />
              </Switch>
            </main>
          </Container>
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
