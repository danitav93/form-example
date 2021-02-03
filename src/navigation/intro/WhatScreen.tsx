import React from 'react';
import { SlideList, SlideTitle, SlideItem, Slide } from '../../components/ui/slide';

export const WhatScreen = () => {
  return (
    <Slide>
      <SlideTitle>What ?</SlideTitle>
      <SlideList>
        <SlideItem>Correct behaviour of forms (Design level)</SlideItem>
        <SlideItem>Implement forms in React (useForm, yup, formik etc...)</SlideItem>
      </SlideList>
    </Slide>
  );
};
