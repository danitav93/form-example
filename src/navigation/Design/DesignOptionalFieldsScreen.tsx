import React from 'react';
import styled from 'styled-components';
import { SlideItem, SlideList, SlideTitle } from '../../components/ui/slide';
import optionalField from '../../img/optionalField.png';
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

export const DesignOptionalFieldScreen = () => {
  useSlide(true);
  return (
    <Container>
      <StyledSlideTitle>Optional fields</StyledSlideTitle>
      <SlideList>
        <SlideItem>Clearly mark optional fields</SlideItem>
        <SlideItem>fieldName(optional) is ok</SlideItem>
        <SlideItem>*fieldName is less ok</SlideItem>
      </SlideList>
      <img src={optionalField} style={{ width: '100%' }} alt="NotFound" />
    </Container>
  );
};
