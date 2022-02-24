import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'components/header/index';
import Home from 'screens/Home/index';
import Settings from 'screens/Settings/index';

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from 'constants/router';

import { Container } from './style';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
