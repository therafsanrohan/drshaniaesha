'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-in' | 'scale-up' | 'reveal-mask' | 'slide-up';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.05,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Feature detection fallback for older browsers or restricted WebViews
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    // Check if element is already in initial viewport to prevent flash
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        setIsVisible(true);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '50px 0px 0px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const getStyles = (): React.CSSProperties => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    // Ensure content is 100% visible during SSR / initial paint before JS hydration
    if (!mounted || isVisible) {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
        transition: mounted ? baseTransition : 'none',
      };
    }

    switch (variant) {
      case 'fade-up':
      case 'slide-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 20px, 0)',
          transition: 'none',
        };
      case 'scale-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 14px, 0) scale(0.97)',
          transition: 'none',
        };
      case 'fade-in':
        return {
          opacity: 0,
          transform: 'translate3d(0, 0, 0)',
          transition: 'none',
        };
      default:
        return {
          opacity: 0,
          transform: 'translate3d(0, 16px, 0)',
          transition: 'none',
        };
    }
  };

  return (
    <div ref={ref} className={className} style={getStyles()}>
      {children}
    </div>
  );
};
