import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { LeftSidebar } from '.';
import {
  Wrapper,
  Header,
  MenuCloseWrapper,
  MenuClose,
  ContactWrapper,
  ContactButton,
} from '../../common/LeftSidebar/index.style';
import { HeaderLogo } from '../../common/Header/index.style';
import { SidebarNav } from '../../common/SidebarNav';
import { LeftSidebarItems } from '../../common/LeftSidebarItems';

const defaultProps = {
  show: true,
  onHide: () => {},
  onLogout: () => {},
  onOpenRightSidebar: () => {},
};

let element;
const render = (props = defaultProps) => {
  element = mount(
    <Theme>
      <LeftSidebar {...props} />
    </Theme>
  );
};

describe('Authed LeftSidebar', () => {
  describe('rendering', () => {
    beforeEach(() => {
      render();
    });

    it('should render the LeftSidebar', () => {
      expect(element.find(LeftSidebar).length).toEqual(1);
    });

    it('should render a Wrapper', () => {
      expect(element.find(Wrapper).length).toEqual(1);
    });

    it('should render a Header', () => {
      expect(element.find(Header).length).toEqual(1);
    });

    it('should render a MenuCloseWrapper', () => {
      expect(element.find(MenuCloseWrapper).length).toEqual(1);
    });

    it('should render a MenuClose', () => {
      expect(element.find(MenuClose).length).toEqual(1);
    });

    it('should render a HeaderLogo', () => {
      expect(element.find(HeaderLogo).length).toEqual(1);
    });

    it('should render a ContactWrapper', () => {
      expect(element.find(ContactWrapper).length).toEqual(1);
    });

    it('should render a ContactButton', () => {
      expect(element.find(ContactButton).length).toEqual(1);
    });

    it('should render a SidebarNav', () => {
      expect(element.find(SidebarNav).length).toEqual(1);
    });

    it('should render a LeftSidebarItems', () => {
      expect(element.find(LeftSidebarItems).length).toEqual(1);
    });
  });

  describe('ContactButton', () => {
    it('should call the onHide Method on click', () => {
      const mock = jest.fn();
      render({ ...defaultProps, onHide: mock });

      element.find(ContactButton).simulate('click');
      expect(mock).toBeCalled();
    });

    it('should call the onOpenRightSidebar on click', () => {
      const mock = jest.fn();
      render({ ...defaultProps, onOpenRightSidebar: mock });

      element.find(ContactButton).simulate('click');
      expect(mock).toBeCalled();
    });
  });

  describe('MenuCloseWrapper', () => {
    it('should call the onHide Method on click', () => {
      const mock = jest.fn();
      render({ ...defaultProps, onHide: mock });

      element.find(MenuCloseWrapper).simulate('click');
      expect(mock).toBeCalled();
    });
  });
});
