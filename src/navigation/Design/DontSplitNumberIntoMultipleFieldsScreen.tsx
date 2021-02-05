import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import dontSplitNumbers from '../../img/dontSplitNumbers.png';
import { useSlide } from '../../hooks/useSlide';

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1000px 600px;
  place-content: center;
  align-items: center;
`;

const StyledSlideTitle = styled(SlideTitle)`
  grid-column: 1 / -1;
`;

export const DontSplitNumbersScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>Don&apos;t split numbers</StyledSlideTitle>
      <SlideList>
        <SlideItem>
          Can cause frustration for users who are looking at the keyboard while typing
        </SlideItem>
      </SlideList>
      <img src={dontSplitNumbers} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
