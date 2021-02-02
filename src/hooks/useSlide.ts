import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export const useSlide = (prevRoute: string, nextRoute: string) => {
  const history = useHistory();

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        history.push(prevRoute);
      } else if (event.key === 'ArrowRight') {
        history.push(nextRoute);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  });
};
