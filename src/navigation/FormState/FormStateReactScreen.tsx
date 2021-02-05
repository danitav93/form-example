import React from 'react';
import { SlideItem, SlideList, SlideTitle, Slide } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';

export const FormStateReactScreen = () => {
  useSlide(true);
  return (
    <Slide>
      <SlideTitle>Form State in React</SlideTitle>
      <SlideList>
        <SlideItem>Can work as in pure HTML (uncontrolled)</SlideItem>
        <SlideItem>Or form state can be saved in...</SlideItem>
        <SlideItem>Component State, Redux Store, ?? (...controlled)</SlideItem>
      </SlideList>
    </Slide>
  );
};
