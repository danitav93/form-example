import React from 'react';
import { Slide, SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';

export const YupLandingScreen = () => {
  useSlide();
  return (
    <Slide>
      <SlideTitle>Yup validation</SlideTitle>
      <SlideList>
        <SlideItem>
          Forms data <em>must</em> be validated
        </SlideItem>
        <SlideItem>Schemas are a great way to validate objects</SlideItem>
        <SlideItem>As seen before local & quick validation is important</SlideItem>
      </SlideList>
    </Slide>
  );
};
