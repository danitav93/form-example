import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { HomeScreen } from './navigation/HomeScreen';
import { ROUTES } from './constants/routes';
import { DesignSwitch } from './navigation/Design/DesignSwitch';
import { IntroSwitch } from './navigation/intro/IntroSwitch';
import { YupSwitch } from './navigation/Yup/YupSwitch';
import { FormStateSwitch } from './navigation/FormState/FormStateSwitch';
import { ProgressBar } from './components/ui/ProgressBar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: stretch;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <ProgressBar />
        <Switch>
          <Route path="/yup">
            <YupSwitch />
          </Route>
          <Route path="/formState">
            <FormStateSwitch />
          </Route>
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
      </AppContainer>
    </Router>
  );
}

export default App;
