import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import arrangeListCheckBoxesVertically from '../../img/arrangeListCheckBoxesVertically.png';
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

export const DesignArrangeListCheckBoxesVerticallyScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>Vertical layout</StyledSlideTitle>
      <SlideList>
        <SlideItem>Arrange lists, checkboxes, and radio buttons vertically</SlideItem>
      </SlideList>
      <img src={arrangeListCheckBoxesVertically} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
