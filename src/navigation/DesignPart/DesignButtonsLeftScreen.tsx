import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import buttonsLeft from '../../img/buttonsLeft.png';
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

export const DesignButtonsLeftScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>Actions buttons</StyledSlideTitle>
      <SlideList>
        <SlideItem>
          Primary and secondary actions at the bottom left of a form, with the primary action on the
          left, and the secondary action
        </SlideItem>
      </SlideList>
      <img src={buttonsLeft} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
