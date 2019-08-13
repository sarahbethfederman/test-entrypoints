import { Children } from 'react';
import { getLeft, useInfiniteChildren } from './util';

const slideWidths = [500, 300, 200, 100];

describe('Carousel util', () => {
  describe('getLeft()', () => {
    const slideTests = [
      [0, slideWidths[0], 0],
      [1, slideWidths[1], -500],
      [2, slideWidths[2], -800],
      [3, slideWidths[3], -1000],
    ];

    it('will return 0 if index is less than zero', () => {
      expect(getLeft(-1, slideWidths)).toEqual(0);
    });

    it.each(slideTests)('with index %d and width %d, will return %d', (index, _, expected) => {
      expect(getLeft(index, slideWidths)).toEqual(expected);
    });

    it('will return total width of all slides if index is greater than slides[] length', () => {
      expect(getLeft(5, slideWidths)).toEqual(-1100);
    });
  });

  describe('useInfiniteChildren()', () => {
    const baseState = {
      previous: 0,
      current: 1,
      children: Children.map(slideWidths, (width) => width),
      slideWidths,
      width: 800,
      infinite: true,
    };

    it('returns indexes and children unchanged if not infinite', () => {
      const state = {
        ...baseState,
        infinite: false,
      };

      expect(
        useInfiniteChildren(
          state.previous,
          state.current,
          state.children,
          state.slideWidths,
          state.width,
          state.infinite
        )
      ).toEqual({
        previousIndex: state.previous,
        currentIndex: state.current,
        children: state.children,
      });
    });

    it('returns indexes and children unchanged if previous equals current', () => {
      const state = {
        ...baseState,
        previous: 0,
        current: 0,
      };

      expect(
        useInfiniteChildren(
          state.previous,
          state.current,
          state.children,
          state.slideWidths,
          state.width,
          state.infinite
        )
      ).toEqual({
        previousIndex: state.previous,
        currentIndex: state.current,
        children: state.children,
      });
    });
  });
});
