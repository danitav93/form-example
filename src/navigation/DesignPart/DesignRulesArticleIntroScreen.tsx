import React from 'react';
import { Slide, SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';

export const DesignRulesArticleIntroScreen = () => {
  return (
    <Slide>
      <SlideTitle>Design of forms</SlideTitle>
      <SlideList>
        <SlideItem>&quot;UI Design Best Practices For Form Design&quot;: 81 rules</SlideItem>
        <SlideItem>We took 48: see the README</SlideItem>
        <SlideItem>Let&apos;s have a look at some of them</SlideItem>
      </SlideList>
    </Slide>
  );
};
