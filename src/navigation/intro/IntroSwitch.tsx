import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../constants/routes';
import { IntroWhatScreen } from './IntroWhatScreen';
import { IntroWhyScreen } from './IntroWhyScreen';

export const IntroSwitch = () => {
  const MainContainer = styled.div`
    flex: 1;
    display: flex;
    background: #8e0e00;
    background: -webkit-linear-gradient(to bottom, #1f1c18, #8e0e00);
    background: linear-gradient(to bottom, #1f1c18, #8e0e00);
  `;
  return (
    <MainContainer>
      <Switch>
        <Route exact path={ROUTES.INTRO_WHAT}>
          <IntroWhatScreen />
        </Route>
        <Route exact path={ROUTES.INTRO_WHY}>
          <IntroWhyScreen />
        </Route>
      </Switch>
    </MainContainer>
  );
};
