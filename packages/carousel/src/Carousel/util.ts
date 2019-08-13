import { useRef, useEffect, ReactNode, isValidElement, ReactType } from 'react';
import { IncrementMap } from '../types';
import { Breakpoint } from '@lendi-ui/breakpoint';

interface SavedCallback {
  current: () => any;
}

/***
 * taken from @dan_abramov
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export function useInterval(callback: () => any, delay: number | null) {
  const savedCallback: SavedCallback = useRef(() => null);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const clear = () => clearInterval(interval.current!);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (interval.current) clear();

    if (delay !== null) {
      interval.current = setInterval(tick, delay);
      return clear;
    }
    return;
  }, [delay, clear]);

  return clear;
}

export const setInfiniteCurrentIndex = (value: number, length: number, infinite: boolean): number => {
  if (!infinite || (value < length && value >= 0)) return value;
  if (value >= length) return setInfiniteCurrentIndex(value - length, length, infinite);
  return setInfiniteCurrentIndex(length + value, length, infinite);
};

export const isType = (child: ReactNode, ...components: ReactType[]): boolean =>
  components.filter((component) => isValidElement(child) && child.type === component).length > 0;

export const getBreakpoint = () => {
  const lendiUiSize = parseFloat(getComputedStyle(document.body).getPropertyValue('--lendi-ui-size'));

  if (window.innerWidth >= parseFloat(Breakpoint.desktop) * lendiUiSize) return 'desktop';
  else if (window.innerWidth >= parseFloat(Breakpoint.tablet) * lendiUiSize) return 'tablet';
  return 'mobile';
};

export const getIncrement = (increment: number | IncrementMap, breakpoint: 'mobile' | 'tablet' | 'desktop') =>
  typeof increment === 'number' ? increment : increment[breakpoint];
