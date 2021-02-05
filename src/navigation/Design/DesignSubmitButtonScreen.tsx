import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import submitButton from '../../img/submitButton.png';
import { useSlide } from '../../hooks/useSlide';

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1000px 600px;
  place-content: center;
  align-items: center;
  grid-gap: 40px;
`;

const StyledSlideTitle = styled(SlideTitle)`
  grid-column: 1 / -1;
`;

export const DesignSubmitButtonScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>Submit button</StyledSlideTitle>
      <SlideList>
        <SlideItem>Disable the “Submit” button until validation is passed</SlideItem>
        <SlideItem>
          Provides a clear visual indicator to the user that their data entry is ready for
          submission.
        </SlideItem>
      </SlideList>
      <img src={submitButton} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
