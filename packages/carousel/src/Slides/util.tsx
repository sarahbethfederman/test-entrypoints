import * as React from 'react';

export const getLeft = (index: number, slides: number[]) =>
  index <= 0 ? 0 : slides.slice(0, index).reduce((prev, curr) => prev - curr, 0);

interface FilteredChildren {
  children: React.ReactNode[];
  cumulativeWidth: number;
}

export const getVisibleChildren = (width: number) => (
  previousIndex: number,
  currentIndex: number,
  children: React.ReactNode,
  slideWidths: number[]
): { previousIndex: number; currentIndex: number; children: React.ReactNode } => {
  if (width === 0) {
    return { previousIndex, currentIndex, children };
  }
  const newChildren = React.Children.toArray(children).reduce(
    (prev: FilteredChildren, current, i) => {
      if (i >= Math.min(previousIndex, currentIndex) && prev.cumulativeWidth < width) {
        prev.children = prev.children.concat(current);
        if (i >= Math.max(previousIndex, currentIndex)) {
          prev.cumulativeWidth = prev.cumulativeWidth + slideWidths[i];
        }
      } else {
        prev.children = prev.children.concat(<div key={i} style={{ width: `${slideWidths[i]}px` }} />);
      }
      return prev;
    },
    { children: [], cumulativeWidth: 0 }
  );

  return { previousIndex, currentIndex, children: newChildren.children };
};

export const useInfiniteChildren = (
  previousIndex: number,
  currentIndex: number,
  children: React.ReactNode,
  slideWidths: number[],
  width: number,
  infinite: boolean
) => {
  const returnVisibleChildren = getVisibleChildren(width);
  if (!infinite) return returnVisibleChildren(previousIndex, currentIndex, children, slideWidths);

  const count = React.Children.count(children);
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
      const newChildren = React.Children.toArray(children).slice(0, addSlides);
      const newSlideWidths = slideWidths.slice(0, addSlides);
      return returnVisibleChildren(previous, current, [children, ...newChildren], [...slideWidths, ...newSlideWidths]);
    }
    return { previousIndex: previous, currentIndex: current, children };
  } else if (previous < current) {
    const newChildren = React.Children.toArray(children).slice(current);
    return returnVisibleChildren(
      around,
      0,
      [...newChildren, ...React.Children.toArray(children).slice(0, current)],
      [...slideWidths.slice(current), ...slideWidths.slice(0, current)]
    );
  } else {
    const newChildren = React.Children.toArray(children).slice(previous);
    return returnVisibleChildren(
      0,
      around,
      [...newChildren, ...React.Children.toArray(children).slice(0, previous)],
      [...slideWidths.slice(previous), ...slideWidths.slice(0, previous)]
    );
  }
};
