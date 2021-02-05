import React from 'react';
import { Slide, SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';

export const WhenControlledScreen = () => {
  return (
    <Slide>
      <SlideTitle>When controlled ?</SlideTitle>
      <SlideList>
        <SlideItem>Complex form fields</SlideItem>
        <SlideItem>SideEffects depending on form state</SlideItem>
        <SlideItem>Manipulate field value</SlideItem>
      </SlideList>
    </Slide>
  );
};
