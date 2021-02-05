import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import placeholder from '../../img/placeholder.png';
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

export const DesignPlaceholderScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>Don’t use placeholder as label</StyledSlideTitle>
      <SlideList>
        <SlideItem>
          Placeholder text should help with data entry format, which it can’t if it’s being used as
          a label
        </SlideItem>
      </SlideList>
      <img src={placeholder} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
