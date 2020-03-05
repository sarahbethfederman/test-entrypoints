import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Size, TextAreaWrapper } from './index.style';
import { color } from '@lendi-ui/color';
import { render, cleanup, fireEvent } from '@testing-library/react';
import TextArea, { TextAreaProps } from './';

const sizes: Size[] = ['lg', 'md', 'sm'];

let element;

function renderTextarea(props) {
  element = mount(
    <Theme>
      <TextArea value={props.value} placeholder="input here ..." onChange={jest.fn()} {...props} />
    </Theme>
  );
}

describe('Text area', () => {
  it('should renderTextarea the text area component', () => {
    renderTextarea({});
    expect(element.find(TextArea)).toHaveLength(1);
    expect(element.find(TextArea)).toMatchSnapshot();
    expect(element.find(TextAreaWrapper)).toHaveLength(1);
  });

  describe('variations of the text area in all given sizes', () => {
    sizes.forEach((size) => {
      describe(`${size}`, () => {
        it('should renderTextarea 100% width of with isFullWidth prop', () => {
          const isFullWidth = true;
          renderTextarea({ isFullWidth });
          expect(element.find(TextAreaWrapper)).toHaveStyleRule('width', '100%');
          expect(element.find(TextAreaWrapper)).toMatchSnapshot();
        });

        it('should renderTextarea the component in a disabled state with the isDisabled prop', () => {
          const isDisabled = true;
          renderTextarea({ isDisabled });
          expect(element.find(TextAreaWrapper)).toHaveStyleRule(`'background-color', ${color('shade.25')}`);
          expect(element.find(TextAreaWrapper)).toMatchSnapshot();
        });

        it('should renderTextarea the component with a white border and transparent background if the isInverse prop is true', () => {
          const isInverse = true;
          renderTextarea({ isInverse });
          expect(element.find(TextAreaWrapper)).toHaveStyleRule('background-color', 'transparent');
          expect(element.find(TextAreaWrapper)).toHaveStyleRule(`'border', '1px solid ${color('shade.25')}'`);
          expect(element.find(TextAreaWrapper)).toMatchSnapshot();
        });

        it('should renderTextarea the component with a red border if the isError state is true', () => {
          const isError = true;
          renderTextarea({ isError });
          expect(element.find(TextAreaWrapper)).toHaveStyleRule(`'border', '1px solid ${color('warn.500')}`);
          expect(element.find(TextAreaWrapper)).toMatchSnapshot();
        });
      });
    });
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      renderTextarea({
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const attributes = element.find('textarea').props();
      expect(attributes['aria-label']).toBe(ARIA_LABEL);
      expect(attributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });
    it('should mount with native props like id, tabIndex', () => {
      const TEXT_ID = 'testId';
      renderTextarea({
        id: TEXT_ID,
        tabIndex: 1,
      });
      const attributes = element.find('textarea').props();
      expect(attributes.id).toBe(TEXT_ID);
      expect(attributes.tabIndex).toBe(1);
    });
  });
});

// using '@testing-library/react' to test textarea auto expandable feature
interface TestTextAreaProps extends TextAreaProps {}

const TestTextArea = (props: TestTextAreaProps) => (
  <Theme>
    <TextArea {...props} />
  </Theme>
);

// right now we just do a very hacky testing that we already know the ratio is -1.333 and padding-top, padding-bottom is 2. We use the expected rows * ratio and plus vertical padding to get the mock scrollHeight.
describe('TextArea should auto expand after over initial rows when maxRows is set up', () => {
  afterEach(cleanup);

  it('should NOT expand when the changing lines number is less than initial rows', () => {
    const { getByTestId } = render(<TestTextArea rows={3} maxRows={7} />);

    expect(getByTestId('lui-textarea').getAttribute('rows')).toBe('3');
    const scrollHeightSpy = jest
      .spyOn(document.getElementById('lui-textarea'), 'scrollHeight', 'get')
      .mockImplementation(() => 0);

    // change line 2 times which is less than 3
    fireEvent.change(getByTestId('lui-textarea'), { target: { value: 'hello\n\n' } });
    expect(getByTestId('lui-textarea').getAttribute('rows')).toBe('3');
  });

  it('should expand when the changing lines number is greater than initial rows but less than maxRows', async () => {
    const { getByTestId } = render(<TestTextArea rows={3} maxRows={7} />);

    getByTestId('lui-textarea');
    expect(getByTestId('lui-textarea').getAttribute('rows')).toBe('3');
    const scrollHeightSpy = jest
      .spyOn(document.getElementById('lui-textarea'), 'scrollHeight', 'get')
      .mockImplementation(() => -2.66);

    // change line 5 times which is greater than 3 but less than 7
    fireEvent.change(getByTestId('lui-textarea'), { target: { value: 'hello\n\n\n\n\n' } });
    expect(getByTestId('lui-textarea').getAttribute('rows')).toBe('5');
  });

  it('should stop expanding when the changing lines number is greater than the maxRows', () => {
    const { getByTestId } = render(<TestTextArea rows={3} maxRows={7} />);

    getByTestId('lui-textarea');
    expect(getByTestId('lui-textarea').getAttribute('rows')).toBe('3');
    const scrollHeightSpy = jest
      .spyOn(document.getElementById('lui-textarea'), 'scrollHeight', 'get')
      .mockImplementation(() => -9.33);

    // change line 10 times which is greater than 7
    fireEvent.change(getByTestId('lui-textarea'), { target: { value: 'hello\n\n\n\n\n\n\n\n\n\n' } });
    expect(getByTestId('lui-textarea').getAttribute('rows')).toBe('7');
  });
});
