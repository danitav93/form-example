import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { DesignLandingScreen } from './DesignLandingScreen';
import { DesignRulesArticleIntroScreen } from './DesignRulesArticleIntroScreen';
import { DesignOptionalFieldScreen } from './DesignOptionalFieldsScreen';
import { OneColumnScreen } from './OneColumnScreen';
import { DesignArrangeListCheckBoxesVerticallyScreen } from './DesignArrangeListCheckBoxesVerticallyScreen';
import { DontSplitNumbersScreen } from './DontSplitNumberIntoMultipleFieldsScreen';
import { DesignWithoutMouseScreen } from './DesignWithoutMouseScreen';
import { DesignPlaceholderScreen } from './DesignPlaceholderScreen';
import { DesignInlineValidationScreen } from './DesignInlineValidationScreen';
import { DesignSubmitButtonScreen } from './DesignSubmitButtonScreen';
import { DesignButtonsLeftScreen } from './DesignButtonsLeftScreen';

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
      <Route exact path={ROUTES.DESIGN_ONE_COLUMN}>
        <OneColumnScreen />
      </Route>
      <Route exact path={ROUTES.DESIGN_ARRANGE_LIST_CHECK_BOXES_VERTICALLY}>
        <DesignArrangeListCheckBoxesVerticallyScreen />
      </Route>
      <Route exact path={ROUTES.DESIGN_DONT_SPLIT_NUMBERS}>
        <DontSplitNumbersScreen />
      </Route>
      <Route exact path={ROUTES.DESIGN_PLACEHOLDER}>
        <DesignPlaceholderScreen />
      </Route>
      <Route exact path={ROUTES.DESIGN_WITHOUT_MOUSE}>
        <DesignWithoutMouseScreen />
      </Route>
      <Route exact path={ROUTES.DESIGN_INLINE_VALIDATION}>
        <DesignInlineValidationScreen />
      </Route>
      <Route exact path={ROUTES.DESIGN_SUBMIT_BUTTON}>
        <DesignSubmitButtonScreen />
      </Route>
      <Route exact path={ROUTES.DESIGN_BUTTONS_LEFT}>
        <DesignButtonsLeftScreen />
      </Route>
    </Switch>
  );
};
