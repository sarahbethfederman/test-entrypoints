import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Legal from './index';
import { Wrapper, ContentContainer, BodyContainer } from './index.style';
import { Heading } from '@lendi-ui/typography';

const curYear = new Date().getFullYear();

describe('Legal', () => {
  let element;
  beforeEach(() => {
    element = mount(
      <Theme>
        <Legal />
      </Theme>
    );
  });
  it('should mount', () => {
    expect(element.find(Legal)).toHaveLength(1);
    expect(element.find('.curYear').text()).toEqual(curYear.toString());
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(ContentContainer)).toHaveLength(1);
    expect(element.find(BodyContainer)).toHaveLength(7);
    expect(element.find(Heading)).toHaveLength(1);
    expect(element.find(Legal)).toMatchSnapshot();
    expect(element.find("meta[name='format-detection']").exists()).toEqual(true);
  });
  describe('test native props and Standard HTML Attributes', () => {
    let legalAttributes;
    beforeEach(() => {
      element = mount(
        <Theme>
          <Legal aria-label="testLabel" aria-describedby="info" id="testId" tabIndex={Number(1)} />
        </Theme>
      );
      legalAttributes = element.find(Legal).props();
    });

    it('should mount with Aria attributes', () => {
      expect(legalAttributes['aria-label']).toBe('testLabel');
      expect(legalAttributes['aria-describedby']).toBe('info');
    });
    it('should mount with native props like id, tabIndex', () => {
      expect(legalAttributes.id).toBe('testId');
      expect(legalAttributes.tabIndex).toBe(1);
    });
  });
});
