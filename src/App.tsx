import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeScreen } from './navigation/HomeScreen';
import { DesignFormRulesScreen } from './navigation/DesignPart/DesignFormRulesScreen';
import styled from 'styled-components';
import { ReasonsScreen } from './navigation/ReasonsScreen';

function App() {
  return (
    <MainContainer>
      <Router>
        <Switch>
          <Route path="/design">
            <DesignFormRulesScreen />
          </Route>
          <Route path="/reasons">
            <ReasonsScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #8e0e00;
  background: -webkit-linear-gradient(to bottom, #1f1c18, #8e0e00);
  background: linear-gradient(to bottom, #1f1c18, #8e0e00);
`;

export default App;
