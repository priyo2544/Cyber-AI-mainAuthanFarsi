/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
"use client"
import { useState, useLayoutEffect } from 'react';

const useWindows = (delay: number) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, delay);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [delay]);

  return windowSize;
};

const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

export default useWindows;
