import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
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
import { DesignFinalHintsScreen } from './DesignFinalHintsScreen';

export const DesignSwitch = () => {
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
        <Route exact path={ROUTES.DESIGN_FINAL_HINTS}>
          <DesignFinalHintsScreen />
        </Route>
      </Switch>
    </MainContainer>
  );
};
