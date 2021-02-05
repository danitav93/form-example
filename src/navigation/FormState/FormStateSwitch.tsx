import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../constants/routes';
import { FormStateIntroScreen } from './FormStateIntroScreen';
import { FormStateNeedStateScreen } from './FormStateNeedStateScreen';
import { FormStatePureHtmlScreen } from './FormStatePureHtmlScreen';
import { FormStateReactScreen } from './FormStateReactScreen';
import { FormStateUncontrolledScreen } from './FormStateUncontrolledScreen';
import { FormStateUncontrolledWithDefaultScreen } from './FormStateUncontrolledWithDefaultScreen';
import { FormStateControlledScreen } from './FormStateControlledScreen';
import { WhenUncontrolledScreen } from './FormStateWhenUncontrolledScreen';
import { WhenControlledScreen } from './FormStateWhenControlledScreen';
import { FormStateLibrariesScreen } from './FormStateLibrariesScreen';
import { ReactHookFormIntroScreen } from './FormStateReactHookFormIntro';
import { ReactHookFormFirstExampleScreen } from './FormStateReactHookFormFirstExampleScreen';
import { FormStateReactHookFormFirstFeaturesScreen } from './FormStateReactHookFormFirstFeaturesScreen';
import { FormStateReactHookFormPerformanceScreen } from './FormStateReactHookFormPerformanceScreen';
import { FormStateReactHookFormPerformanceWithValuesScreen } from './FormStateReactHookFormPerformanceWithValuesScreen';
import { FormStateNextStepScreen } from './FormStateNextStepsScreen';

export const FormStateSwitch = () => {
  const MainContainer = styled.div`
    flex: 1;
    display: flex;
    background: #4b6cb7;
    background: -webkit-linear-gradient(to top, #4b6cb7, #182848);
    background: linear-gradient(to top, #4b6cb7, #182848);
  `;
  return (
    <MainContainer>
      <Switch>
        <Route exact path={ROUTES.FORM_STATE_INTRO}>
          <FormStateIntroScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_NEED_STATE}>
          <FormStateNeedStateScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_PURE_HTML}>
          <FormStatePureHtmlScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_REACT}>
          <FormStateReactScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_UNCONTROLLED}>
          <FormStateUncontrolledScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_UNCONTROLLED_WITH_DEFAULT}>
          <FormStateUncontrolledWithDefaultScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_CONTROLLED}>
          <FormStateControlledScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_WHEN_UNCONTROLLED}>
          <WhenUncontrolledScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_WHEN_CONTROLLED}>
          <WhenControlledScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_MANAGEMENT_LIBRARIES}>
          <FormStateLibrariesScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_REACT_HOOK_FORM_INTRO}>
          <ReactHookFormIntroScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_REACT_HOOK_FORM_FIRST_EXAMPLE}>
          <ReactHookFormFirstExampleScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_REACT_HOOK_FORM_FIRST_FEATURES}>
          <FormStateReactHookFormFirstFeaturesScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_REACT_HOOK_FORM_PERFORMANCE}>
          <FormStateReactHookFormPerformanceScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_REACT_HOOK_FORM_PERFORMANCE_WITH_VALUES}>
          <FormStateReactHookFormPerformanceWithValuesScreen />
        </Route>
        <Route exact path={ROUTES.FORM_STATE_NEXT_STEP}>
          <FormStateNextStepScreen />
        </Route>
      </Switch>
    </MainContainer>
  );
};
