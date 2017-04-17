import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import About from './About';
import Header from './Header';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import Onboarding from './Onboarding';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Route exact path="/" component={About} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/onboarding" component={Onboarding} />
      </Container>
    );
  }
}

export default App;
