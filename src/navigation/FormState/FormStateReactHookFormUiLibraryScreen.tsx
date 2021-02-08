import React from 'react';
import { SlideList, SlideTitle, SlideItem, Slide } from '../../components/ui/slide';

export const FormStateReactHookFormUiLibraryScreen = () => {
  return (
    <Slide>
      <SlideTitle>Integrate controlled components</SlideTitle>
      <SlideList>
        <SlideItem>Deal with libraries exposing controlled UI (React Select)</SlideItem>
        <SlideItem>Deal with our custom controlled components</SlideItem>
      </SlideList>
    </Slide>
  );
};
