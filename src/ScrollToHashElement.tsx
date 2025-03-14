import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // Remove the '#' character
    }

    if (lastHash.current) {
      const element = document.getElementById(lastHash.current);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      lastHash.current = '';
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;