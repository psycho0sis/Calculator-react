import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'components/header/index';
import Home from 'screens/Home/index';
import Settings from 'screens/Settings/index';

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from 'constants/router';

import { Container } from './style';
import { Global } from 'globalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, coloredTheme } from 'theme';

import { ThemeContext } from 'context/themeContext';

class App extends Component {
  constructor(props) {
    super(props);

    this.selectTheme = (e) => {
      switch (e.target.value) {
        case 'lightTheme': {
          this.setState({
            theme: lightTheme,
            val: 'lightTheme'
          });
          break;
        }
        case 'coloredTheme': {
          this.setState({
            theme: coloredTheme,
            val: 'coloredTheme'
          });
          break;
        }
        case 'darkTheme': {
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

    this.state = {
      theme: lightTheme,
      val: 'lightTheme',
      selectTheme: this.selectTheme
    };
  }

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
