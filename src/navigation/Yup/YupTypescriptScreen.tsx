import React from 'react';
import { SlideItem, SlideList, Slide, SlideTitle } from '../../components/ui/slide';
import { useSlide } from '../../hooks/useSlide';

export const YupTypescriptScreen = () => {
  useSlide();
  return (
    <Slide>
      <SlideTitle>Yup and Typescript</SlideTitle>
      <SlideList>
        <SlideItem>Typescript is great!</SlideItem>
        <SlideItem>Yup is good</SlideItem>
        <SlideItem>
          Typescript + Yup is... <em>meh</em>
        </SlideItem>
      </SlideList>
    </Slide>
  );
};
