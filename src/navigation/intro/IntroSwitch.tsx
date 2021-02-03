import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { IntroWhatScreen } from './IntroWhatScreen';
import { IntroWhyScreen } from './IntroWhyScreen';

export const IntroSwitch = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.INTRO_WHAT}>
        <IntroWhatScreen />
      </Route>
      <Route exact path={ROUTES.INTRO_WHY}>
        <IntroWhyScreen />
      </Route>
    </Switch>
  );
};
