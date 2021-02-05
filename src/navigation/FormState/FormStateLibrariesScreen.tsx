import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import formStateLibraries from '../../img/formStateLibraries.png';
import { useSlide } from '../../hooks/useSlide';

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 600px 800px;
  place-content: center;
  align-items: center;
  grid-gap: 40px;
`;

const StyledSlideTitle = styled(SlideTitle)`
  grid-column: 1 / -1;
`;

export const FormStateLibrariesScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>Form State Management libraries</StyledSlideTitle>
      <SlideList>
        <SlideItem>React Hook Form</SlideItem>
        <SlideItem>Formik</SlideItem>
        <SlideItem>Redux Form</SlideItem>
      </SlideList>
      <img src={formStateLibraries} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
