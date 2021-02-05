import React from 'react';
import { Slide, SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';

export const WhenUncontrolledScreen = () => {
  return (
    <Slide>
      <SlideTitle>When uncontrolled ?</SlideTitle>
      <SlideList>
        <SlideItem>Uncontrolled seems less verbose, better for easy fields</SlideItem>
        <SlideItem>Performance...</SlideItem>
      </SlideList>
    </Slide>
  );
};
