import React from 'react';
import { SlideList, SlideTitle, SlideItem, Slide } from '../../components/ui/slide';

export const FormStateReactHookFormFirstFeaturesScreen = () => {
  return (
    <Slide>
      <SlideTitle>What we have seen so far</SlideTitle>
      <SlideList>
        <SlideItem>
          Use register and &quot;name&quot; property to &quot;link&quot; html form fields
        </SlideItem>
        <SlideItem>HandleSubmit to wrap onSubmit</SlideItem>
        <SlideItem>Watch to subscribe to form values</SlideItem>
      </SlideList>
    </Slide>
  );
};
