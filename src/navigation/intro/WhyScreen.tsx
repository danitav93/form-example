import React from 'react';
import { SlideList, SlideTitle, SlideItem, Slide } from '../../components/ui/slide';

export const WhyScreen = () => {
  return (
    <Slide>
      <SlideTitle>Why ?</SlideTitle>
      <SlideList>
        <SlideItem>Forms are everywhere</SlideItem>
        <SlideItem>We struggle with them</SlideItem>
        <SlideItem>Lack of guidelines</SlideItem>
      </SlideList>
    </Slide>
  );
};
