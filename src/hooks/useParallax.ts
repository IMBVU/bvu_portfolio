import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ParallaxOptions {
  offset?: number;
  speed?: number;
  direction?: 'up' | 'down';
}

export function useParallax({ offset = 50, speed = 0.5, direction = 'up' }: ParallaxOptions = {}) {
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useScroll();

  const getInitialValue = () => (direction === 'up' ? offset : -offset);
  const getFinalValue = () => (direction === 'up' ? -offset : offset);

  const y = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + window.innerHeight],
    [getInitialValue(), getFinalValue()],
    {
      clamp: false
    }
  );

  const opacity = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop, elementTop + window.innerHeight],
    [0.2, 1, 0.2]
  );

  const scale = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop, elementTop + window.innerHeight],
    [0.8, 1, 0.8]
  );

  return { y, opacity, scale, setElementTop };
}

export function useParallaxSection() {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    if (!ref) return;
    setElementTop(ref.offsetTop);

    const handleResize = () => {
      if (ref) setElementTop(ref.offsetTop);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  const y = useTransform(
    scrollY,
    [elementTop - 1000, elementTop + 1000],
    ['0%', '100%'],
    { clamp: false }
  );

  return { ref: setRef, y };
}