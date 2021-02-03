import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { HomeScreen } from './navigation/HomeScreen';
import { ROUTES } from './constants/routes';
import { DesignSwitch } from './navigation/DesignPart/DesignSwitch';
import { IntroSwitch } from './navigation/intro/IntroSwitch';

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #8e0e00;
  background: -webkit-linear-gradient(to bottom, #1f1c18, #8e0e00);
  background: linear-gradient(to bottom, #1f1c18, #8e0e00);
`;

function App() {
  return (
    <MainContainer>
      <Router>
        <Switch>
          <Route path="/design">
            <DesignSwitch />
          </Route>
          <Route path="/intro">
            <IntroSwitch />
          </Route>
          <Route path={ROUTES.HOME}>
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </MainContainer>
  );
}

export default App;
