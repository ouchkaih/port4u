import { useEffect, useState } from 'react';

export function useScrollAnimationR() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll direction
      const scrollY = window.scrollY || window.pageYOffset;
      const isScrollingDown = scrollY > 200;
      
      // Update visibility based on scroll direction
      setIsVisible(!isScrollingDown);
      
      // Remember last scroll position
      window.lastScrollY = scrollY;
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Detach scroll event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible && ( window.innerWidth >= 768 && window.innerWidth < 2550);
}
