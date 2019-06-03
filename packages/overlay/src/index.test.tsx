import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Wrapper } from './index.style';
import Overlay from './index';
import { OverlayProps } from '../dist/types';

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

describe('Overlay: test native props and Standard HTML Attributes', () => {
  let element: ReactWrapper<OverlayProps>, attributes;
  beforeEach(() => {
    element = mount(
      <Theme>
        <Overlay show={true} aria-label="testLabel" aria-describedby="info" id="testId" title="testTitle" />
      </Theme>
    );
    attributes = element.find(Overlay).props();
  });
  it('should mount with Aria attributes', () => {
    expect(attributes['aria-label']).toBe('testLabel');
    expect(attributes['aria-describedby']).toBe('info');
  });
  it('should mount with native props like id, title', () => {
    expect(attributes.id).toBe('testId');
    expect(attributes.title).toBe('testTitle');
  });
});
