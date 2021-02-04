import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { YupLandingScreen } from './YupLandingScreen';
import { YupTypescriptScreen } from './YupTypescriptScreen';
import { YupTypingSchemaScreen } from './YupTypingSchemaScreen';

export const YupSwitch = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.YUP_LANDING}>
        <YupLandingScreen />
      </Route>
      <Route exact path={ROUTES.YUP_TYPESCRIPT}>
        <YupTypescriptScreen />
      </Route>
      <Route exact path={ROUTES.YUP_TYPING_SCHEMAS}>
        <YupTypingSchemaScreen />
      </Route>
    </Switch>
  );
};
