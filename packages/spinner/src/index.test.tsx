import * as React from 'react';
import Theme from '@lendi-ui/theme';
import { mount } from 'enzyme';
import { Spinner as SpinerIcon } from '@lendi-ui/icon';
import Spinner from '.';

describe('Spinner', () => {
  let Wrapper;
  /**
   * Test Spinner without color.
   */
  describe('without color variant', () => {
    beforeEach(() => {
      Wrapper = mount(
        <Theme>
          <Spinner />
        </Theme>
      );
    });
    it('should render dark style spinner', () => {
      expect(Wrapper.find(SpinerIcon).props().color).toEqual('primary.500');
    });
  });
  /**
   * Test Spinner with color.
   */
  describe('with color variant', () => {
    beforeEach(() => {
      Wrapper = mount(
        <Theme>
          <Spinner variant="light" />
        </Theme>
      );
    });
    it('should render light style spinner', () => {
      expect(Wrapper.find(SpinerIcon).props().color).toEqual('shade.0');
    });
  });
});
