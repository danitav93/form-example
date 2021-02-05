import React from 'react';
import { SlideList, SlideTitle, SlideItem, Slide } from '../../components/ui/slide';

export const FormStateIntroScreen = () => {
  return (
    <Slide>
      <SlideTitle>Implement forms</SlideTitle>
      <SlideList>
        <SlideItem>Graphics is about css... out of scope</SlideItem>
        <SlideItem>How do we implement their logic?</SlideItem>
        <SlideItem>Validation, submit, sideEffects etc...</SlideItem>
      </SlideList>
    </Slide>
  );
};
