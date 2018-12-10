import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Wrapper } from './index.style';
import Overlay from './index';

describe('Overlay', () => {
  it('should call onHide when the overlay is visible and ESC is pressed', () => {
    const onHide = jest.fn();
    mount(
      <Theme>
        <Overlay show={true} onHide={onHide} />
      </Theme>
    );
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
      })
    );
    expect(onHide).toHaveBeenCalled();
  });

  it('should not call onHide when the overlay is hidden and ESC is pressed', () => {
    const onHide = jest.fn();
    mount(
      <Theme>
        <Overlay show={false} onHide={onHide} />
      </Theme>
    );
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
      })
    );
    expect(onHide).not.toHaveBeenCalled();
  });

  it('should not call onHide when the overlay is visible and any other key is pressed', () => {
    const onHide = jest.fn();
    mount(
      <Theme>
        <Overlay show={true} onHide={onHide} />
      </Theme>
    );
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
      })
    );
    expect(onHide).not.toHaveBeenCalled();
  });

  it('should not call onHide when the overlay is hidden and any other key is pressed', () => {
    const onHide = jest.fn();
    mount(
      <Theme>
        <Overlay show={false} onHide={onHide} />
      </Theme>
    );
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowUp',
      })
    );
    expect(onHide).not.toHaveBeenCalled();
  });

  it('should call onHide when the overlay is visible and is clicked', () => {
    const onHide = jest.fn();
    const element = mount(
      <Theme>
        <Overlay show={true} onHide={onHide} />
      </Theme>
    );
    element.find(Wrapper).simulate('click');
    expect(onHide).toHaveBeenCalled();
  });
});
