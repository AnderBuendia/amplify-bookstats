import { useState, useEffect } from 'react';

const useResolution = () => {
  const [windowDimensions, setWindowDimensions] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.innerWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useResolution;
