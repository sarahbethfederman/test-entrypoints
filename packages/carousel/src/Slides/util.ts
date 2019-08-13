import { ReactNode, Children } from 'react';

export const getLeft = (index: number, slides: number[]) =>
  index <= 0 ? 0 : slides.slice(0, index).reduce((prev, curr) => prev - curr, 0);

export const useInfiniteChildren = (
  previousIndex: number,
  currentIndex: number,
  children: ReactNode,
  slideWidths: number[],
  width: number,
  infinite: boolean
) => {
  if (!infinite || previousIndex === currentIndex) return { previousIndex, currentIndex, children };

  const count = Children.count(children);
  const previous = previousIndex >= 0 ? previousIndex : count + previousIndex;
  const current = currentIndex >= 0 ? currentIndex : count + currentIndex;

  let between: number;
  let around: number;
  if (previous < current) {
    between = current - previous;
    around = previous + count - current;
  } else {
    between = previous - current;
    around = current + count - previous;
  }

  if (between <= around) {
    const visibleSlidesWidth = slideWidths
      .slice(Math.max(previousIndex, currentIndex))
      .reduce((prev, next) => prev + next, 0);
    if (visibleSlidesWidth < width) {
      let addSlides = 0;
      let addSlidesWidth = 0;
      while (visibleSlidesWidth + addSlidesWidth < width) {
        addSlidesWidth += slideWidths[addSlides];
        addSlides++;
      }
      const newChildren = Children.toArray(children).slice(0, addSlides);
      return {
        previousIndex: previous,
        currentIndex: current,
        children: [children, ...newChildren],
      };
    }
    return { previousIndex: previous, currentIndex: current, children };
  } else if (previous < current) {
    const newChildren = Children.toArray(children).slice(current);
    return {
      previousIndex: around,
      currentIndex: 0,
      children: [...newChildren, ...Children.toArray(children).slice(0, current)],
    };
  } else {
    const newChildren = Children.toArray(children).slice(previous);
    return {
      previousIndex: 0,
      currentIndex: around,
      children: [...newChildren, ...Children.toArray(children).slice(0, previous)],
    };
  }
};
