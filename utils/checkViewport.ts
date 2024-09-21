import { useState, useEffect } from 'react';

export default function useCheckViewport() {
  const [viewportWidth, setViewportWidth] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);

    updateViewportWidth();

    window.addEventListener('resize', updateViewportWidth);

    return () => window.removeEventListener('resize', updateViewportWidth);
  }, []);

  return viewportWidth;
}
