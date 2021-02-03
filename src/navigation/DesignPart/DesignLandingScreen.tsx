import React from 'react';
import { Slide, SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';

export const DesignLandingScreen = () => {
  return (
    <Slide>
      <SlideTitle>Design of forms</SlideTitle>
      <SlideList>
        <SlideItem>UI element sending information to a server</SlideItem>
        <SlideItem>Designers and Developers should plan complex forms together</SlideItem>
        <SlideItem>Sometimes developers must &quot;guess&quot; the correct behaviour</SlideItem>
      </SlideList>
    </Slide>
  );
};
