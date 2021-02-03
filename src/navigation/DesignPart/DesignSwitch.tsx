import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { DesignLandingScreen } from './DesignLandingScreen';

export const DesignSwitch = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.DESIGN_LANDING}>
        <DesignLandingScreen />
      </Route>
    </Switch>
  );
};
