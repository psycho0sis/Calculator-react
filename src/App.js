import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import styled from 'styled-components';

import Header from './components/header/Header';
import Home from './screens/Home/Home';
import Settings from './screens/Settings/Settings';

import './App.scss';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

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
