import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import stmFlow from '../../img/stmFlow.png';
import { useSlide } from '../../hooks/useSlide';

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1000px 600px;
  place-content: center;
  align-items: center;
  grid-gap: 40px;
`;

const StyledSlideTitle = styled(SlideTitle)`
  grid-column: 1 / -1;
`;

export const StmFlowScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>About form data flow</StyledSlideTitle>
      <SlideList>
        <SlideItem>How form forwards data to stm?</SlideItem>
        <SlideItem>Need to convert shape of the form to shape of BE API</SlideItem>
        <SlideItem>But... where?</SlideItem>
      </SlideList>
      <img src={stmFlow} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
