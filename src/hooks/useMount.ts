import { useEffect } from 'react';

export const useMount = (name?: string) => {
  // eslint-disable-next-line no-console
  console.log(`Rendering ${name}`);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Mounting ${name ?? ''}`);
    return () => {
      // eslint-disable-next-line no-console
      console.log(`Unmounting ${name ?? ''}`);
    };
  }, [name]);
};
