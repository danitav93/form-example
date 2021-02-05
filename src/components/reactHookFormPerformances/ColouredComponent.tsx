import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import { useMount } from '../../hooks/useMount';

const Container = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpan = styled.span`
  font-size: 20px;
`;

export function ColouredComponent({ color, text }: InferProps<typeof ColouredComponent.propTypes>) {
  useMount(`Component ${color}`);

  const containerRef = useRef<HTMLDivElement | null>(null);

  if (containerRef.current) {
    containerRef.current.style.opacity = '0.5';
    setTimeout(() => {
      if (containerRef?.current) {
        containerRef.current.style.opacity = '1';
      }
    }, 200);
  }

  return (
    <Container color={color} ref={containerRef}>
      <StyledSpan>{color} Component</StyledSpan>
      {!!text && <StyledSpan>{text}</StyledSpan>}
    </Container>
  );
}

ColouredComponent.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
};

ColouredComponent.defaultProps = {
  text: undefined,
};

export const MemoizedColouredComponent = React.memo(ColouredComponent);
