import React from 'react';
import { SlideItem, SlideList, SlideTitle, Slide } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';

export const FormStatePureHtmlScreen = () => {
  useSlide(true);
  return (
    <Slide>
      <SlideTitle>Form State in HTML</SlideTitle>
      <SlideList>
        <SlideItem>Each form element keeps its own state internally </SlideItem>
        <SlideItem>Tags: input, textArea, select</SlideItem>
        <SlideItem>Tag form groups form elements and provide facilities</SlideItem>
      </SlideList>
    </Slide>
  );
};
