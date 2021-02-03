import React from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import { useSlide } from '../../../hooks/useSlide';

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1200px;
  place-content: center;
  align-items: start;
  grid-gap: 40px;
`;

export function Slide({ children }: InferProps<typeof Slide.propTypes>) {
  useSlide();
  return <Container>{children}</Container>;
}

Slide.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const SlideTitle = styled.span`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 170px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
`;

export const SlideList = styled.ul`
  list-style-type: square;
  color: white;
`;

export const SlideItem = styled.li`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 80px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  margin: 70px 0;
`;
