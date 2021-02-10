import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../constants/routes';
import { StmFlowScreen } from './StmFlowScreen';

export const StmFlowSwitch = () => {
  const MainContainer = styled.div`
    flex: 1;
    display: flex;
    background: #8e5f00;
    background: -webkit-linear-gradient(to bottom, #1f1c18, #8e5f00);
    background: linear-gradient(to bottom, #1f1c18, #8e5f00);
  `;
  return (
    <MainContainer>
      <Switch>
        <Route exact path={ROUTES.STM_FLOW}>
          <StmFlowScreen />
        </Route>
      </Switch>
    </MainContainer>
  );
};
