import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getNextSlide, getPreviousSlide } from '../utils/routes';
import { ROUTES } from '../constants/routes';

export const useSlide = () => {
  const history = useHistory();
  const location = useLocation();

  const currentPath = location.pathname;

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        history.push(getPreviousSlide(currentPath as ROUTES));
      } else if (event.key === 'ArrowRight') {
        history.push(getNextSlide(currentPath as ROUTES));
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  });
};
