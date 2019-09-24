/* tslint:disable */
import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Theme from '@lendi-ui/theme';
import Popover from './index';
import { Position } from './index.style';

import '@testing-library/jest-dom/extend-expect';

const popoverContent = 'This is the content!';
const buttonText = 'Click me';
const PopoverComponent = () => (
  <Theme>
    <Popover position="top">
      <Popover.Target>
        <button>{buttonText}</button>
      </Popover.Target>
      <Popover.Content>{popoverContent}</Popover.Content>
    </Popover>
  </Theme>
);

// The tests throw a bunch of errors if they can't see these methods
// these were taken from the library's tests here:
// https://github.com/mohsinulhaq/react-popper-tooltip/blob/master/tests/TooltipTrigger.spec.tsx
// @ts-ignore
window.MutationObserver = class {
  public disconnect() {}
  public observe() {}
};

// @ts-ignore
if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    // @ts-ignore
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}

jest.useFakeTimers();
afterEach(cleanup);

describe('Popover', () => {
  /**
   * So this is an issue described in this thread:
   * https://github.com/FezVrasta/popper.js/issues/478
   * The tests will pass regardless, but since it uses JSDOM
   * and not the real DOM API, the creator has recognised
   * that these warnings will appear, swallowing them here
   * for convenience.
   */
  let error;
  beforeEach(() => {
    error = console.error;
    console.error = () => {};
  });

  afterEach(() => {
    console.error = error;
  });

  describe('intial render', () => {
    let getByText: any;
    let queryByText: any;

    beforeEach(() => {
      ({ getByText, queryByText } = render(<PopoverComponent />));
    });

    it('should render the target button', () => {
      expect(getByText(buttonText)).toBeInTheDocument();
    });

    it('should not initially render the textContent', () => {
      expect(queryByText(popoverContent)).toBeNull();
    });
  });

  describe('on click behaviour', () => {
    let getByText: any;
    let queryByText: any;

    beforeEach(() => {
      ({ getByText, queryByText } = render(<PopoverComponent />));
      fireEvent.click(getByText(buttonText));
      jest.runAllTimers();
    });

    it('should display the popoverContent when the component is clicked', () => {
      expect(getByText(popoverContent)).toBeInTheDocument();
    });

    it('should hide the text when the target is clicked again', () => {
      fireEvent.click(getByText(buttonText));
      jest.runAllTimers();
      expect(queryByText(popoverContent)).toBeNull();
    });

    it('should hide thext when anything outside the component is clicked', () => {
      fireEvent.click(document.body);
      jest.runAllTimers();
      expect(queryByText(popoverContent)).toBeNull();
    });
  });

  describe('position based tests', () => {
    const positions = [
      'top',
      'top-end',
      'top-start',
      'bottom',
      'bottom-end',
      'bottom-start',
      'left',
      'left-end',
      'left-start',
      'right',
      'right-end',
      'right-start',
    ];

    positions.forEach((pos: Position) => {
      it(`should be set correctly in the ${pos} position`, () => {
        const { getByText } = render(
          <Theme>
            <Popover position={pos}>
              <Popover.Target>
                <button>{buttonText}</button>
              </Popover.Target>
              <Popover.Content>{popoverContent}</Popover.Content>
            </Popover>
          </Theme>
        );
        fireEvent.click(getByText(buttonText));
        jest.runAllTimers();

        const parentContainer = getByText(popoverContent).parentElement;
        expect(parentContainer).toMatchSnapshot();

        const arrowContainer = parentContainer.firstChild.firstChild;
        expect(arrowContainer).toHaveAttribute('data-placement', pos);
      });
    });
  });

  describe('native props & standard HTML attributes', () => {
    let target: any;
    beforeEach(() => {
      const { getByText, getByTestId } = render(
        <Theme>
          <Popover
            position="top"
            aria-label="testLabel"
            aria-describedby="info"
            id="testId"
            title="testTitle"
            data-testid="popover"
          >
            <Popover.Target>
              <button>{buttonText}</button>
            </Popover.Target>
            <Popover.Content>{popoverContent}</Popover.Content>
          </Popover>
        </Theme>
      );
      fireEvent.click(getByText(buttonText));
      jest.runAllTimers();
      target = getByTestId('popover');
    });

    it('should mount with aria attributes', () => {
      expect(target).toHaveAttribute('aria-label', 'testLabel');
      expect(target).toHaveAttribute('aria-describedby', 'info');
    });

    it('should mount with native props like id, title', () => {
      expect(target).toHaveAttribute('id', 'testId');
      expect(target).toHaveAttribute('title', 'testTitle');
    });
  });
});
/* tslint:enable */
