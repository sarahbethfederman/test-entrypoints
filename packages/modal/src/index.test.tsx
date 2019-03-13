import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Modal, { ModalProps } from './index';
import { widthBySize, ModalSize } from './index.style';
import { Breakpoint } from '@lendi-ui/breakpoint';

let element;
let modalContainer;
let onHide;

const sizes: ModalSize[] = ['lg', 'md', 'sm'];

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

  describe('content', () => {
    it('should contain content on modal', () => {
      element = mount(
        <Theme>
          <Modal show={true} onHide={onHide}>
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
          <Modal show={true} onHide={onHide}>
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
        render({ show: true, onHide, size });
        modalContainer = element.find('.modal-container');
        expect(modalContainer).toHaveStyleRule('width', '100%');
        expect(modalContainer).toMatchSnapshot();
      });
    });
    sizes.forEach((size) => {
      it(`should render "${size}" size styles on tablet and desktop`, () => {
        render({ show: true, onHide, size });
        modalContainer = element.find('.modal-container');
        expect(modalContainer).toHaveStyleRule('width', widthBySize[size], {
          media: `(min-width:${Breakpoint.tablet})`,
        });
        expect(modalContainer).toMatchSnapshot();
      });
    });
    it(`should render 'md' as default if there are no size value on tablet and desktop`, () => {
      render({ show: true, onHide });
      modalContainer = element.find('.modal-container');
      expect(modalContainer).toHaveStyleRule('width', widthBySize.md, {
        media: `(min-width:${Breakpoint.tablet})`,
      });
      expect(modalContainer).toMatchSnapshot();
    });
  });

  describe('onHide function', () => {
    it('should call onHide when the modal is visible and ESC is pressed', () => {
      render({ show: true, onHide });
      window.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'Escape',
        })
      );
      expect(onHide).toHaveBeenCalled();
    });

    it('should not call onHide when the modal is hidden and ESC is pressed', () => {
      render({ show: false, onHide });
      window.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'Escape',
        })
      );
      expect(onHide).not.toHaveBeenCalled();
    });

    it('should not call onHide when the modal is visible and any other key is pressed', () => {
      render({ show: true, onHide });
      window.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowUp',
        })
      );
      expect(onHide).not.toHaveBeenCalled();
    });

    it('should not call onHide when the modal is hidden and any other key is pressed', () => {
      render({ show: false, onHide });
      window.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowUp',
        })
      );
      expect(onHide).not.toHaveBeenCalled();
    });
  });
});
