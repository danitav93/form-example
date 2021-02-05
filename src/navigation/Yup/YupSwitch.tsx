import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../constants/routes';
import { YupLandingScreen } from './YupLandingScreen';
import { YupTypescriptScreen } from './YupTypescriptScreen';
import { YupTypingSchemaScreen } from './YupTypingSchemaScreen';
import { YupExampleScreen } from './YupExampleScreen';
import { YupTransformExampleScreen } from './YupTransformExampleScreen';

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  background: #6a9113;
  background: -webkit-linear-gradient(to bottom, #141517, #6a9113);
  background: linear-gradient(to bottom, #141517, #6a9113);
`;

export const YupSwitch = () => {
  return (
    <MainContainer>
      <Switch>
        <Route exact path={ROUTES.YUP_TRANSFORM_EXAMPLE}>
          <YupTransformExampleScreen />
        </Route>
        <Route exact path={ROUTES.YUP_EXAMPLE}>
          <YupExampleScreen />
        </Route>
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
    </MainContainer>
  );
};
