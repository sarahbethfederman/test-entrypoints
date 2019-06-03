import * as React from 'react';
import Theme from '@lendi-ui/theme';
import { mount } from 'enzyme';
import { Spinner as SpinerIcon } from '@lendi-ui/icon';
import Spinner from '.';
import { SpinnerIconWrapper } from './index.style';
import { SpinnerProps } from '../dist/types';

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

  describe('Spinner: test native props and Standard HTML Attributes', () => {
    let attributes: any;
    beforeEach(() => {
      Wrapper = mount(
        <Theme>
          <Spinner aria-label="testLabel" aria-describedby="info" id="testId" title="testTitle" />
        </Theme>
      );
      attributes = Wrapper.find(SpinnerIconWrapper).props();
    });
    it('should mount with Aria attributes', () => {
      expect(attributes['aria-label']).toBe('testLabel');
      expect(attributes['aria-describedby']).toBe('info');
    });
    it('should mount with native props like id, title', () => {
      expect(attributes.id).toBe('testId');
      expect(attributes.title).toBe('testTitle');
    });
  });
});
