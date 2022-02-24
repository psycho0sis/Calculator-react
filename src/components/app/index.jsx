import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'components/header/index';
import Home from 'screens/Home/Home';
import Settings from 'screens/Settings/index';

import { Container } from './style';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/settings" component={Settings} />
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
