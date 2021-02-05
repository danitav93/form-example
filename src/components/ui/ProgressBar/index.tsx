import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import './progressBar.css';
import { useSlide } from '../../../hooks/useSlide';

const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(#000000, #5b5c67);
`;

const ProgressBarComplete = styled.div<{ percentageWidth: number }>`
  width: ${(props) => props.percentageWidth}%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  animation: g 2500ms infinite ease-in-out;
  z-index: 2;
`;

export const ProgressBarLiquid = styled.div`
  z-index: 1;
  width: 70px;
  height: 70px;
  animation: g 2500ms infinite ease-in-out, r 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
  position: absolute;
  right: -5px;
  top: -10px;
  background-color: #5225bd;
  border-radius: 40%;
`;
export function ProgressBar() {
  const { completionPercentage, navigateToSlideByPercentage } = useSlide();
  const ref = useRef<HTMLDivElement | null>(null);
  const handleClick: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!ref.current?.offsetWidth) {
        return;
      }
      const xPercentage = (event.clientX / ref.current?.offsetWidth) * 100;
      navigateToSlideByPercentage(xPercentage);
    },
    [navigateToSlideByPercentage],
  );
  return (
    <ProgressBarContainer onClick={handleClick} ref={ref}>
      <ProgressBarComplete percentageWidth={completionPercentage}>
        <ProgressBarLiquid />
      </ProgressBarComplete>
    </ProgressBarContainer>
  );
}
