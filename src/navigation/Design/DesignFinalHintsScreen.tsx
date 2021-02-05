import React from 'react';
import { Slide, SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';

export const DesignFinalHintsScreen = () => {
  return (
    <Slide>
      <SlideTitle>Other rules...</SlideTitle>
      <SlideList>
        <SlideItem>Auto-focus on the first field in a form</SlideItem>
        <SlideItem>Use masks in preference to placeholders</SlideItem>
        <SlideItem>Don’t ask for password confirmation</SlideItem>
      </SlideList>
    </Slide>
  );
};
