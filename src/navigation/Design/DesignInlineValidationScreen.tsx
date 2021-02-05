import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import inlineValidation from '../../img/inlineValidation.png';
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

export const DesignInlineValidationScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>Inline validation</StyledSlideTitle>
      <SlideList>
        <SlideItem>
          It makes sense to address errors while the user is already thinking about the information
        </SlideItem>
        <SlideItem>
          Displaying errors when users submit the form disrupts user progress and makes it more
          likely they will give up
        </SlideItem>
      </SlideList>
      <img src={inlineValidation} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
