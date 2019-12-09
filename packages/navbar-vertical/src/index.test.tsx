import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Theme, { theme } from '@lendi-ui/theme';
import { color } from '@lendi-ui/color';

import VerticalNavbar, { useVerticalNavContext } from './index';

let testIsExpanded: boolean, testIsMouseOver: boolean;

const TestNavbarContent = () => {
  const { isExpanded, isMouseOver } = useVerticalNavContext();

  testIsExpanded = isExpanded;
  testIsMouseOver = isMouseOver;

  return (
    <>
      <VerticalNavbar.Header>🏡 Homli</VerticalNavbar.Header>

      <VerticalNavbar.Tab tooltip="Tab one">Tab one</VerticalNavbar.Tab>

      <VerticalNavbar.Tab tooltip="Tab two">Tab two</VerticalNavbar.Tab>

      <VerticalNavbar.Tab tooltip="Tab three" disabled>
        Tab three
      </VerticalNavbar.Tab>
    </>
  );
};

const TestNavbarWrapper = () => (
  <Theme>
    <VerticalNavbar>
      <TestNavbarContent />
    </VerticalNavbar>
  </Theme>
);

describe('Vertical Navbar', () => {
  afterEach(() => {
    cleanup();
    testIsExpanded = null;
    testIsMouseOver = null;
  });

  it('should render', () => {
    const { getByTestId } = render(<TestNavbarWrapper />);

    expect(getByTestId('vertical navbar'));
  });

  it('should render expanded', () => {
    render(<TestNavbarWrapper />);

    expect(testIsExpanded).toBe(true);
  });

  it('should render the expander invisible', () => {
    const { getByTestId } = render(<TestNavbarWrapper />);

    expect(getByTestId('vn expander').innerHTML).toMatch(/opacity: 0;/);
  });

  it('should trigger isMouseOver when mouse has entered vertical navbar', () => {
    const { getByTestId } = render(<TestNavbarWrapper />);

    fireEvent.mouseEnter(getByTestId('vertical navbar'));

    expect(testIsMouseOver).toBe(true);
  });

  it('should trigger isMouseOver off when mouse has left vertical navbar', () => {
    const { getByTestId } = render(<TestNavbarWrapper />);

    fireEvent.mouseEnter(getByTestId('vertical navbar'));
    fireEvent.mouseLeave(getByTestId('vertical navbar'));

    expect(testIsMouseOver).toBe(false);
  });

  it('should render the expander visible when mouse on vertical navbar', (done) => {
    const { getByTestId } = render(<TestNavbarWrapper />);

    fireEvent.mouseEnter(getByTestId('vertical navbar'));

    setTimeout(() => {
      expect(getByTestId('vn expander').innerHTML).toMatch(/opacity: 1;/);
      done();
    }, 300);
  });

  it('should collapse when expander is clicked', () => {
    const { getByTestId } = render(<TestNavbarWrapper />);

    fireEvent.click(getByTestId('vn expander'));

    expect(testIsExpanded).toBe(false);
  });

  it('should collapse and re-expand when expander is clicked twice', () => {
    const { getByTestId } = render(<TestNavbarWrapper />);

    fireEvent.click(getByTestId('vn expander'));
    fireEvent.click(getByTestId('vn expander'));

    expect(testIsExpanded).toBe(true);
  });

  it('should be greyed out and unclickable tab if disabled', () => {
    const { getByText } = render(<TestNavbarWrapper />);

    expect(getByText('Tab three')).toHaveStyle(`
      background-color: ${color('shade.200')({ theme })};
      pointer-events: none;
    `);
  });
});
