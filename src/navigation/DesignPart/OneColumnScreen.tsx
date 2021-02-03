import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import oneColumn from '../../img/oneColumn.png';
import { useSlide } from '../../hooks/useSlide';

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1000px 600px;
  place-content: center;
  grid-gap: 40px;
`;

const StyledSlideTitle = styled(SlideTitle)`
  grid-column: 1 / -1;
`;

export const OneColumnScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>Vertical layout</StyledSlideTitle>
      <SlideList>
        <SlideItem>Use one column layouts</SlideItem>
        <SlideItem>Fewer opportunities for the user to “miss” input fields</SlideItem>
      </SlideList>
      <img src={oneColumn} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
