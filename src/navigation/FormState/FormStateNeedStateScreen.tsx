import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import needState from '../../img/needState.png';
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

export const FormStateNeedStateScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>Form State</StyledSlideTitle>
      <SlideList>
        <SlideItem>We refer to the actual values of the form as Form State</SlideItem>
        <SlideItem>Form state needs to be stored somewhere</SlideItem>
      </SlideList>
      <img src={needState} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
