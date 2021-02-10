import React from 'react';
import { SlideList, SlideTitle, SlideItem, Slide } from '../../components/ui/slide';

export const FormStateReactHookFormConclusionsScreen = () => {
  return (
    <Slide>
      <SlideTitle>RHF: conclusions</SlideTitle>
      <SlideList>
        <SlideItem>We have discussed about controlled, uncontrolled and rendering</SlideItem>
        <SlideItem>Many other features: formState, fieldArrays, validation</SlideItem>
        <SlideItem>We now go into validation...</SlideItem>
      </SlideList>
    </Slide>
  );
};
