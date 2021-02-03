import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { HomeScreen } from './navigation/HomeScreen';
import { DesignFormRulesScreen } from './navigation/DesignPart/DesignFormRulesScreen';
import { WhyScreen } from './navigation/intro/WhyScreen';
import { ROUTES } from './constants/routes';
import { WhatScreen } from './navigation/intro/WhatScreen';

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
          <Route path={ROUTES.DESIGN}>
            <DesignFormRulesScreen />
          </Route>
          <Route path={ROUTES.WHAT}>
            <WhatScreen />
          </Route>
          <Route path={ROUTES.WHY}>
            <WhyScreen />
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
