import React from 'react';
import { SlideList, SlideTitle, SlideItem, Slide } from '../../components/ui/slide';

export const ReactHookFormIntroScreen = () => {
  return (
    <Slide>
      <SlideTitle>React Hook Form</SlideTitle>
      <SlideList>
        <SlideItem>Reduce re-renders and amount of code</SlideItem>
        <SlideItem>Integration with UI libraries</SlideItem>
        <SlideItem>Integration with Validation libraries</SlideItem>
        <SlideItem>Built with TypeScript</SlideItem>
      </SlideList>
    </Slide>
  );
};
