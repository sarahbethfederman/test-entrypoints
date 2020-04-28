import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import StatusBadge from './index';
import { Wrapper, IconWrapper, ContentWrapper } from './index.style';
import { InfoTwo, Check, WarnTwo } from '@lendi-ui/icon';
import { theme as domainTheme } from '@lendi-ui/theme-domain';
let element, variant;

function render(props) {
  element = mount(
    <Theme>
      <StatusBadge variant="success" hasIcon={true} statusText="COMPLETED" {...props} />
    </Theme>
  );
}

function renderWithDomainTheme(props) {
  element = mount(
    <Theme kind={domainTheme}>
      <StatusBadge variant="success" hasIcon={true} statusText="COMPLETED" {...props} />
    </Theme>
  );
}

describe('StatusBadge', () => {
  it('should mount StatusBadge component without icon', () => {
    render({ icon: false });
    expect(element.find(StatusBadge)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(ContentWrapper)).toHaveLength(1);
    expect(element.find(StatusBadge)).toMatchSnapshot();
  });

  it('should mount StatusBadge component with icon', () => {
    render({});
    expect(element.find(StatusBadge)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(IconWrapper)).toHaveLength(1);
    expect(element.find(Check)).toHaveLength(1);
    expect(element.find(Check).props().color).toEqual('success.500');
    expect(element.find(ContentWrapper)).toHaveLength(1);
    expect(element.find(StatusBadge)).toMatchSnapshot();
  });

  it("it should mount the StatusBadge component when variant is 'error'", () => {
    variant = 'error';
    render({ variant });
    expect(element.find(WarnTwo)).toHaveLength(1);
    expect(element.find(WarnTwo).props().color).toEqual('error.500');
  });

  it("it should mount the StatusBadge component when variant is 'info'", () => {
    variant = 'info';
    render({ variant });
    expect(element.find(InfoTwo)).toHaveLength(1);
    expect(element.find(InfoTwo).props().color).toEqual('info.500');
  });

  it("it should mount the StatusBadge component when variant is 'success'", () => {
    variant = 'success';
    render({ variant });
    expect(element.find(Check)).toHaveLength(1);
    expect(element.find(Check).props().color).toEqual('success.500');
  });

  it("it should mount the StatusBadge component when variant is 'warn'", () => {
    variant = 'warn';
    render({ variant });
    expect(element.find(WarnTwo)).toHaveLength(1);
    expect(element.find(WarnTwo).props().color).toEqual('warn.500');
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const attributes = element.find(StatusBadge).props();
      expect(attributes['aria-label']).toBe(ARIA_LABEL);
      expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, tabIndex', () => {
      const TEXT_ID = 'testId';
      render({
        id: TEXT_ID,
        tabIndex: 1,
      });
      const attributes = element.find(StatusBadge).props();
      expect(attributes.id).toBe(TEXT_ID);
      expect(attributes.tabIndex).toBe(1);
    });
  });

  describe('test size variants', () => {
    ['sm', 'lg'].forEach((size: string) => {
      describe(`render ContentWrapper when sizeVariant = ${size}`, () => {
        render({
          size: `${size}`,
        });
        it(`should style with line-height and font-size`, () => {
          expect(element.find(ContentWrapper).at(0)).toHaveStyleRule('font-size', 'calc(0.75 * var(--lendi-ui-size))');
          expect(element.find(ContentWrapper).at(0)).toHaveStyleRule('line-height', 'calc(16 / 12)');
        });
      });
    });
  });

  describe('test with domain theme', () => {
    it(`should style with -3px of margin-bottom when size sm`, () => {
      renderWithDomainTheme({
        size: 'sm',
      });
      expect(element.find(ContentWrapper).at(0)).toHaveStyleRule('margin-bottom', '-3px');
    });
    it(`should style with -5px of margin-bottom when size lg`, () => {
      renderWithDomainTheme({
        size: 'lg',
      });
      expect(element.find(ContentWrapper).at(0)).toHaveStyleRule('margin-bottom', '-5px');
    });
  });
});