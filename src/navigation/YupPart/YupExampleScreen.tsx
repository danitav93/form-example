import React from 'react';
import { useSlide } from '../../hooks/useSlide';
import { Slide, SlideTitle } from '../../components/ui/slide';

export const YupExampleScreen = () => {
  useSlide();
  return (
    <Slide>
      <SlideTitle>Example Form</SlideTitle>
    </Slide>
  );
};
