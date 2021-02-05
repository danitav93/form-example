import React from 'react';
import { SlideList, SlideTitle, SlideItem, Slide } from '../../components/ui/slide';

export const FormStateNextStepScreen = () => {
  return (
    <Slide>
      <SlideTitle>Next steps through RHF</SlideTitle>
      <SlideList>
        <SlideItem>Handle controlled components</SlideItem>
        <SlideItem>Handle errors and validation</SlideItem>
      </SlideList>
    </Slide>
  );
};
