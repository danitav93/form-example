import { useHistory, useLocation } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { getNextSlide, getPreviousSlide } from '../utils/routes';
import { ROUTES } from '../constants/routes';

export const useSlide = (enableLeftAndRight?: boolean) => {
  const history = useHistory();
  const location = useLocation();

  const currentPath = location.pathname;

  const goToNextSlide = useCallback(() => {
    history.push(getNextSlide(currentPath as ROUTES));
  }, [currentPath, history]);
  const goToPreviousSlide = useCallback(() => {
    history.push(getPreviousSlide(currentPath as ROUTES));
  }, [currentPath, history]);

  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPreviousSlide();
      } else if (event.key === 'ArrowRight') {
        goToNextSlide();
      }
    },
    [goToNextSlide, goToPreviousSlide],
  );

  useEffect(() => {
    if (enableLeftAndRight) {
      document.addEventListener('keydown', handleKey);
    }
    return () => {
      if (enableLeftAndRight) {
        document.removeEventListener('keydown', handleKey);
      }
    };
  }, [currentPath, enableLeftAndRight, handleKey, history]);

  return {
    goToNextSlide,
    goToPreviousSlide,
  };
};
