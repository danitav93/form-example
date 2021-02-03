import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { DesignLandingScreen } from './DesignLandingScreen';
import { DesignRulesArticleIntroScreen } from './DesignRulesArticleIntroScreen';
import { DesignOptionalFieldScreen } from './DesignOptionalFieldsScreen';

export const DesignSwitch = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.DESIGN_LANDING}>
        <DesignLandingScreen />
      </Route>
      <Route exact path={ROUTES.DESIGN_RULES_ARTICLE_INTRO}>
        <DesignRulesArticleIntroScreen />
      </Route>
      <Route exact path={ROUTES.DESIGN_OPTIONAL_FIELD}>
        <DesignOptionalFieldScreen />
      </Route>
    </Switch>
  );
};
