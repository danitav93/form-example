import React from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
  useSlide(true);
  return <Container>{children}</Container>;
}

Slide.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const SlideTitle = styled.span`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 120px;
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
  font-size: 60px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  margin: 70px 0;
`;

export const SlideCode = styled(SyntaxHighlighter).attrs({
  language: 'jsx',
  style: synthwave84,
})`
  background-color: black;
  padding: 20px;
  border-radius: 10px;
`;
