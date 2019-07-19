import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Header } from './index';
import {
  FullWidthContainer,
  Container,
  LeftGroup,
  RightGroup,
  LogoWrapper,
  LogoLink,
  OldHeaderLogo,
  OldMenuButton,
  HeaderButton,
} from '../../../common/Header/index.style';
import { Menu } from '@lendi-ui/icon';
import { ButtonGroup } from '@lendi-ui/button';
import { HOME_PAGE_LINK } from '../../../constants/links';
import { AnalyticsContextProps } from '@lendi-ui/utils';
import { WindowPosition } from '@lendi/lendi-analytics-package';

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
const onOpenLeftSidebar = jest.fn();
const onOpenRightSidebar = jest.fn();

const mockAnalyticsContext: AnalyticsContextProps = {
  analyticsForNavigation: jest.fn(),
};

const render = (props) => {
  wrapper = mount(
    <Theme>
      <Header
        onOpenLeftSidebar={onOpenLeftSidebar}
        onOpenRightSidebar={onOpenRightSidebar}
        isTransparent={false}
        {...props}
      />
    </Theme>
  );
  wrapper.find(Header).instance().context = mockAnalyticsContext;
  wrapper.update();
};

describe('Header', () => {
  describe('it should render general components', () => {
    beforeEach(() => render({}));

    it('should mount the whole Header component', () => {
      expect(wrapper.find(FullWidthContainer)).toHaveLength(1);
      expect(wrapper.find(Container)).toHaveLength(1);
    });

    it('should mount the LeftGroup component', () => {
      expect(wrapper.find(LeftGroup)).toHaveLength(1);
      expect(wrapper.find(OldMenuButton)).toHaveLength(1);
      expect(wrapper.find(Menu)).toHaveLength(1);
      expect(wrapper.find(LogoWrapper)).toHaveLength(1);
      expect(wrapper.find(LogoLink)).toHaveLength(1);
      expect(wrapper.find(LogoLink).props().href).toEqual(HOME_PAGE_LINK);
      expect(wrapper.find(OldHeaderLogo)).toHaveLength(1);
    });

    it('should mount the RightGroup component', () => {
      expect(wrapper.find(RightGroup)).toHaveLength(1);
      expect(wrapper.find(ButtonGroup)).toHaveLength(1);
      expect(wrapper.find(HeaderButton)).toHaveLength(2);
    });
  });

  describe('click event', () => {
    beforeEach(() => {
      render({});
      wrapper.find(OldMenuButton).simulate('click');
    });
    it('should call AnalyticsContext fn', () => {
      expect(mockAnalyticsContext.analyticsForNavigation).toBeCalledTimes(1);
    });
    it('should call AnalyticsContext fn with correct params', () => {
      expect(mockAnalyticsContext.analyticsForNavigation).toHaveBeenCalledWith('icon', WindowPosition.header);
    });
  });

  describe('Header with query parameters', () => {
    const params = '?utm_source=google';
    beforeEach(() => render({ params }));

    it('should mount the logo component URL with query parameters', () => {
      expect(wrapper.find(LogoLink).props().href).toEqual(`${HOME_PAGE_LINK}?utm_source=google`);
    });
  });
});
