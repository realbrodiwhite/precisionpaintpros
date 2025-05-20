import { useEffect, useState } from 'react';

// Define standard Tailwind breakpoints
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'initial';

function getBreakpoint(width: number): Breakpoint {
  if (width >= breakpoints['2xl']) {
    return '2xl';
  } else if (width >= breakpoints.xl) {
    return 'xl';
  } else if (width >= breakpoints.lg) {
    return 'lg';
  } else if (width >= breakpoints.md) {
    return 'md';
  } else if (width >= breakpoints.sm) {
    return 'sm';
  } else {
    return 'initial'; // Or 'xs' if you want to represent the smallest size
  }
}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<Breakpoint>(() => {
    if (typeof window === 'undefined') {
      return 'initial'; // Handle server-side rendering
    }
    return getBreakpoint(window.innerWidth);
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getBreakpoint(window.innerWidth));
    };

    // Set initial size on mount
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
}