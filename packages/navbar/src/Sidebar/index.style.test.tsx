import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Wrapper } from './index.style';

describe('Wrapper', () => {
  describe('side=left', () => {
    it('should start moving onto the screen', () => {
      const element = mount(
        <Theme>
          <Wrapper side="left" transition="entering" />
        </Theme>
      );
      expect(element.find(Wrapper)).toHaveStyleRule('transform', 'translateX(0)');
    });

    it('should be on the screen when it has entered', () => {
      const element = mount(
        <Theme>
          <Wrapper side="left" transition="entered" />
        </Theme>
      );
      expect(element.find(Wrapper)).toHaveStyleRule('transform', 'translateX(0)');
    });

    it('should be on the screen when it is about to leave', () => {
      const element = mount(
        <Theme>
          <Wrapper side="left" transition="exit" />
        </Theme>
      );
      expect(element.find(Wrapper)).toHaveStyleRule('transform', 'translateX(0)');
    });

    it('should start moving off the screen', () => {
      const element = mount(
        <Theme>
          <Wrapper side="left" transition="exiting" />
        </Theme>
      );
      expect(element.find(Wrapper)).toHaveStyleRule('transform', 'translateX(-100%)');
    });
  });
  describe('side=right', () => {
    it('should start moving onto the screen', () => {
      const element = mount(
        <Theme>
          <Wrapper side="right" transition="entering" />
        </Theme>
      );
      expect(element.find(Wrapper)).toHaveStyleRule('transform', 'translateX(0)');
    });

    it('should be on the screen when it has entered', () => {
      const element = mount(
        <Theme>
          <Wrapper side="right" transition="entered" />
        </Theme>
      );
      expect(element.find(Wrapper)).toHaveStyleRule('transform', 'translateX(0)');
    });

    it('should be on the screen when it is about to leave', () => {
      const element = mount(
        <Theme>
          <Wrapper side="right" transition="exit" />
        </Theme>
      );
      expect(element.find(Wrapper)).toHaveStyleRule('transform', 'translateX(0)');
    });

    it('should start moving off the screen', () => {
      const element = mount(
        <Theme>
          <Wrapper side="right" transition="exiting" />
        </Theme>
      );
      expect(element.find(Wrapper)).toHaveStyleRule('transform', 'translateX(100%)');
    });
  });
});
