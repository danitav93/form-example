import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import { useSlide } from '../../../hooks/useSlide';

export function Slide({ prevRoute, nextRoute, children }: InferProps<typeof Slide.propTypes>) {
  useSlide(prevRoute, nextRoute);
  return <Container>{children}</Container>;
}

Slide.propTypes = {
  nextRoute: PropTypes.string.isRequired,
  prevRoute: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: max-content;
  place-content: center;
  align-items: start;
  grid-gap: 40px;
`;

export const SlideTitle = styled.text`
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
