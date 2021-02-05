import React from 'react';
import { SlideItem, SlideList, Slide, SlideTitle } from '../../components/ui/slide';

export const DesignWithoutMouseScreen = () => {
  return (
    <Slide>
      <SlideTitle>Keyboard accessibility</SlideTitle>
      <SlideList>
        <SlideItem>
          It should always be possible for the user to fill out and submit your form using only the
          tab and enter keys
        </SlideItem>
      </SlideList>
    </Slide>
  );
};
