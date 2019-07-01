import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Lock, Spinner } from '@lendi-ui/icon';
import { IconButton, IconButtonSize } from '.';

const sizes: IconButtonSize[] = ['lg', 'md', 'sm', 'xs'];

let button;

function render(props) {
  const element = mount(
    <Theme>
      <IconButton icon={Lock} {...props} />
    </Theme>
  );
  button = element.find(IconButton);
}

describe('IconButton', () => {
  it('should render the iconButton component with an icon', () => {
    render({});
    expect(button.find('svg')).toHaveLength(1);
  });

  sizes.forEach((size) => {
    it(`should render the "${size}" size correctly`, () => {
      render({ size });
      expect(button).toMatchSnapshot();
    });
  });

  it('should render an <a> tag when an href prop is provided', () => {
    render({ href: 'https://www.lendi.com.au/' });
    expect(button.find('a')).toHaveLength(1);
    expect(button.find('button')).toHaveLength(0);
  });

  it('should render a <button> when href is not specified', () => {
    const mockOnClick = jest.fn();
    render({ onClick: mockOnClick });
    expect(button.find('a')).toHaveLength(0);
    expect(button.find('button')).toHaveLength(1);
  });

  it("should render disabled style when the 'isDisabled' prop is true", () => {
    render({ href: 'https://www.lendi.com.au/', isDisabled: true });
    expect(button.find(IconButton)).toHaveStyleRule('cursor', 'not-allowed');
  });

  it("should render the Spinner icon when the 'isLoading' prop is true", () => {
    render({ isLoading: true });
    expect(button.find(Spinner)).toHaveLength(1);
  });

  it("should NOT call the 'onClick' function when the 'isDisabled' prop is true", () => {
    const mockOnClick = jest.fn();
    render({ href: 'https://www.lendi.com.au/', isDisabled: true, onClick: mockOnClick });
    button.find(IconButton).simulate('click');
    expect(mockOnClick).not.toBeCalled();
  });

  it('should pass aria label', () => {
    render({ 'aria-label': 'Locked' });
    expect(button.find('button[aria-label]').prop('aria-label')).toEqual('Locked');
  });

  it('should pass through any properties starting with "data-" to the icon-button', () => {
    const dataKey = 'data-test';
    const dataValue = '12345';
    render({ 'data-test': dataValue });
    expect(button.props()[dataKey]).toEqual(dataValue);
  });

  it('should not pass through unrelated properties', () => {
    const fakeKey = 'fake-data';
    render({ fakeKey: 'doesnt exist' });
    expect(button.props()[fakeKey]).toEqual(undefined);
  });

  it("should send back the onClick function with 'SyntheticEvent' event", () => {
    let myEvent = undefined;
    const onClick = (e) => (myEvent = e);
    render({ onClick });
    button.simulate('click');
    expect(myEvent.constructor.name === 'SyntheticEvent').toBeTruthy();
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      expect(button.props()['aria-label']).toBe(ARIA_LABEL);
      expect(button.props()['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id and title', () => {
      const TEXT_ID = 'testId';
      const TEXT_TITLE = 'testTitle';
      render({
        id: TEXT_ID,
        title: TEXT_TITLE,
      });
      expect(button.props()['id']).toBe(TEXT_ID);
      expect(button.props()['title']).toBe(TEXT_TITLE);
    });
  });
});
