import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Breakpoint } from '@lendi-ui/breakpoint';
import Modal, { ModalProps } from './index';
import { widthBySize, ModalSize, CloseIcon } from './index.style';

let element: ReactWrapper;
let modalContainer;
let onHide;

const sizes: ModalSize[] = ['lg', 'md', 'sm'];

const Header = () => <div>Header</div>;
const Content = () => <div>Contents</div>;
const Footer = () => <div>Footer</div>;

const render = (props: ModalProps) => {
  element = mount(
    <Theme>
      <Modal {...props} />
    </Theme>
  );
};

describe('Modal', () => {
  beforeEach(() => (onHide = jest.fn()));

  describe('rendering', () => {
    it('should contain header on modal if it exists', () => {
      const headerText = 'modal header';
      element = mount(
        <Theme>
          <Modal isVisible={true} onHide={onHide}>
            <Modal.Header title={headerText} />
          </Modal>
        </Theme>
      );

      expect(element.find(Modal).text()).toContain(headerText);
    });

    it('should contain content on modal if it exists', () => {
      element = mount(
        <Theme>
          <Modal isVisible={true} onHide={onHide}>
            <Modal.Content>
              <Content />
            </Modal.Content>
          </Modal>
        </Theme>
      );

      expect(element.find(Content)).toHaveLength(1);
    });

    it('should contain footer on modal if it exsits', () => {
      element = mount(
        <Theme>
          <Modal isVisible={true} onHide={onHide}>
            <Modal.Footer>
              <Footer />
            </Modal.Footer>
          </Modal>
        </Theme>
      );

      expect(element.find(Footer)).toHaveLength(1);
    });
  });

  describe('size', () => {
    sizes.forEach((size) => {
      it(`should render with full width no matter what "${size}" is on mobile`, () => {
        render({ isVisible: true, onHide, size });
        modalContainer = element.find('.modal-container');
        expect(modalContainer).toHaveStyleRule('width', '100%');
        expect(modalContainer).toMatchSnapshot();
      });
    });

    sizes.forEach((size) => {
      it(`should render "${size}" size styles on tablet and desktop`, () => {
        render({ isVisible: true, onHide, size });
        modalContainer = element.find('.modal-container');
        expect(modalContainer).toHaveStyleRule('width', widthBySize[size], {
          media: `(min-width:${Breakpoint.tablet})`,
        });
        expect(modalContainer).toMatchSnapshot();
      });
    });

    it(`should render 'md' as default if there are no size value on tablet and desktop`, () => {
      render({ isVisible: true, onHide });
      modalContainer = element.find('.modal-container');
      expect(modalContainer).toHaveStyleRule('width', widthBySize.md, {
        media: `(min-width:${Breakpoint.tablet})`,
      });
      expect(modalContainer).toMatchSnapshot();
    });
  });

  describe('onHide function', () => {
    it('should call onHide when the modal is visible and ESC is pressed', () => {
      render({ isVisible: true, onHide });
      window.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'Escape',
        })
      );
      expect(onHide).toHaveBeenCalled();
    });

    it('should not call onHide when the modal is hidden and ESC is pressed', () => {
      render({ isVisible: false, onHide });
      window.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'Escape',
        })
      );
      expect(onHide).not.toHaveBeenCalled();
    });

    it('should not call onHide when the modal is visible and any other key is pressed', () => {
      render({ isVisible: true, onHide });
      window.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowUp',
        })
      );
      expect(onHide).not.toHaveBeenCalled();
    });

    it('should not call onHide when the modal is hidden and any other key is pressed', () => {
      render({ isVisible: false, onHide });
      window.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowUp',
        })
      );
      expect(onHide).not.toHaveBeenCalled();
    });
  });

  describe('test native props and Standard HTML Attributes', () => {
    it('should mount with Aria attributes', () => {
      const ARIA_LABEL = 'testLabel';
      const ARIA_DESCRIBE_BY = 'info';
      render({
        isVisible: true,
        onHide,
        'aria-label': ARIA_LABEL,
        'aria-describedby': ARIA_DESCRIBE_BY,
      });
      const modalAttributes = element.find(Modal).props();
      expect(modalAttributes['aria-label']).toBe(ARIA_LABEL);
      expect(modalAttributes['aria-describedby']).toBe(ARIA_DESCRIBE_BY);
    });

    it('should mount with native props like id, tabIndex', () => {
      const TEXT_ID = 'testId';
      render({
        isVisible: true,
        onHide,
        id: TEXT_ID,
        tabIndex: 1,
      });
      const modalAttributes = element.find(Modal).props();
      expect(modalAttributes.id).toBe(TEXT_ID);
      expect(modalAttributes.tabIndex).toBe(1);
    });
  });
});
