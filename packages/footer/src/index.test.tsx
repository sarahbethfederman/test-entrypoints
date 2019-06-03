import * as React from 'react';
import { shallow } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Footer from './index';

let element;

describe('Footer', () => {
  beforeEach(() => {
    element = shallow(
      <Theme>
        <Footer />
      </Theme>
    );
  });
  it('it should mount Footer component', () => {
    expect(element.find(Footer)).toHaveLength(1);
    expect(element.find(Footer)).toMatchSnapshot();
  });
  describe('test native props and Standard HTML Attributes', () => {
    let footerAttributes;
    beforeEach(() => {
      element = shallow(
        <Theme>
          <Footer aria-label="testLabel" aria-describedby="info" id="testId" tabIndex={Number(1)} />
        </Theme>
      );
      footerAttributes = element.find(Footer).props();
    });
    it('should mount with Aria attributes', () => {
      expect(footerAttributes['aria-label']).toBe('testLabel');
      expect(footerAttributes['aria-describedby']).toBe('info');
    });
    it('should mount with native props like id, tabIndex', () => {
      expect(footerAttributes.id).toBe('testId');
      expect(footerAttributes.tabIndex).toBe(1);
    });
  });
});
