import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import {
  Wrapper,
  NavigationPanel,
  NavigationItem,
  NavigationButton,
  BodyWrapper,
  BarWrapper,
  Bar,
  ExpandMoreWrapper,
  DisplayPanel,
  HeadingWrapper,
  HeadingLink,
  PanelButton,
  LinksGroup,
  LinkItem,
  PanelLink,
  ProfileWrapper,
  ProfileList,
  ProfileListItem,
  InputIcon,
  Line,
} from './index.style';
import { defaultMenu } from '../../constants/menu-data';
import { HOME_PAGE_LINK, DASHBOARD_LINK, PROPERTY_REPORT_LINK } from '../../constants/links';
import { Heading } from '@lendi-ui/typography';
import { KeyboardArrowRight } from '@lendi-ui/icon';
import { Breakpoint } from '@lendi-ui/breakpoint';

import { NavigationButtons, NavigationButtonsProps } from './index';

let element: ReactWrapper<NavigationButtonsProps>;

const render = (props: NavigationButtonsProps) => {
  element = mount(
    <Theme>
      <NavigationButtons params="" {...props} />
    </Theme>
  );
};

describe('unAuthenticated NavigationButtons', () => {
  beforeEach(() => {
    render({ isAuthenticated: false });
  });

  it('should render one NavigationButtons component', () => {
    expect(element.find(NavigationButtons).length).toEqual(1);
  });

  it('should render one Wrapper component', () => {
    expect(element.find(Wrapper)).toHaveStyleRule('display', 'none');
    expect(element.find(Wrapper)).toHaveStyleRule('display', 'flex', {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });

  it('should render one NavigationPanel component', () => {
    expect(element.find(NavigationPanel).length).toEqual(1);
  });

  it('should render 6 NavigationItem component', () => {
    expect(element.find(NavigationItem).length).toEqual(6);
  });

  describe('the first NavigationItem', () => {
    let home: ReactWrapper;
    beforeEach(() => {
      render({ isAuthenticated: false });
      home = element.find(NavigationItem).at(0);
    });

    it('should render 1 NavigationButton component', () => {
      expect(home.find(NavigationButton).length).toEqual(1);
    });

    it("should render NavigationButton component has href value equal to 'HOME_PAGE_LINK'", () => {
      expect(home.find(NavigationButton).props().href).toEqual(HOME_PAGE_LINK);
    });

    it('should render 1 BodyWrapper component', () => {
      expect(home.find(BodyWrapper).length).toEqual(1);
    });

    it("should render 'HOME' in BodyWrapper component", () => {
      expect(home.find(BodyWrapper).text()).toEqual('HOME');
    });
  });

  defaultMenu.forEach((menu, index) => {
    describe('the second NavigationItem', () => {
      let wrapper: ReactWrapper;
      beforeEach(() => {
        render({ isAuthenticated: false });
        wrapper = element.find(NavigationItem).at(index + 1);
      });

      it('should render 1 NavigationButton component', () => {
        expect(wrapper.find(NavigationButton).length).toEqual(1);
      });

      describe('DisplayPanel', () => {
        let displayPanel: ReactWrapper;
        beforeEach(() => {
          wrapper.find(NavigationButton).simulate('click');
          displayPanel = element.find(DisplayPanel);
        });

        it('should render 1 DisplayPanel component when clicking NavigationButton', () => {
          expect(element.find(DisplayPanel).length).toEqual(1);
        });

        describe('DisplayPanel items', () => {
          it('should render HeadingWrapper in DisplayPanel component', () => {
            expect(displayPanel.find(HeadingWrapper).length).toEqual(1);
          });

          it('should render HeadingWrapper in DisplayPanel component', () => {
            expect(displayPanel.find(HeadingWrapper).length).toEqual(1);
          });

          it('should render Heading in DisplayPanel component', () => {
            expect(displayPanel.find(Heading).length).toEqual(1);
          });

          it('should render KeyboardArrowRight in DisplayPanel component', () => {
            expect(displayPanel.find(KeyboardArrowRight).length).toEqual(1);
          });

          it('should render LinksGroup in DisplayPanel component', () => {
            expect(displayPanel.find(LinksGroup).length).toEqual(1);
          });

          it('should render all children LinkItem in DisplayPanel component', () => {
            expect(displayPanel.find(LinkItem).length).toEqual(defaultMenu[index].children.length);
          });

          it('should render all children PanelLink in DisplayPanel component', () => {
            expect(displayPanel.find(PanelLink).length).toEqual(defaultMenu[index].children.length);
          });
        });

        it('should render 1 HeadingWrapper component in DisplayPanel component', () => {
          expect(element.find(HeadingWrapper).length).toEqual(1);
        });

        it('should render 1 HeadingLink component in DisplayPanel component', () => {
          expect(element.find(HeadingLink).length).toEqual(1);
        });

        it('should render 1 Heading component in DisplayPanel component', () => {
          expect(element.find(Heading).length).toEqual(1);
        });

        it('should render 1 KeyboardArrowRight component in DisplayPanel component', () => {
          expect(element.find(KeyboardArrowRight).length).toEqual(1);
        });

        it('should render 1 LinksGroup component in DisplayPanel component', () => {
          expect(element.find(LinksGroup).length).toEqual(1);
        });
      });

      it('should render 1 BarWrapper component', () => {
        expect(wrapper.find(BarWrapper).length).toEqual(1);
      });

      it('should render 1 BodyWrapper component', () => {
        expect(wrapper.find(BodyWrapper).length).toEqual(1);
      });

      it(`should render ${menu.label} in BodyWrapper component`, () => {
        expect(wrapper.find(BodyWrapper).text()).toEqual(menu.label);
      });

      it('should render 1 Bar component', () => {
        expect(wrapper.find(Bar).length).toEqual(1);
      });

      it('should render 1 ExpandMoreWrapper component', () => {
        expect(wrapper.find(ExpandMoreWrapper).length).toEqual(1);
      });
    });
  });
});

describe('ProfileWrapper when isAuthenticated', () => {
  let profile: ReactWrapper;
  const onLogout = jest.fn();
  beforeEach(() => {
    render({ isAuthenticated: true, onLogout });
    profile = element.find(ProfileWrapper);
  });

  it('should render ProfileWrapper component', () => {
    expect(element.find(ProfileWrapper).length).toEqual(1);
  });

  it('should render 1 NavigationButton component', () => {
    expect(profile.find(NavigationButton).length).toEqual(1);
  });

  it('should render 1 BodyWrapper component', () => {
    expect(profile.find(BodyWrapper).length).toEqual(1);
  });

  it("should render 'profile' in BodyWrapper component", () => {
    expect(profile.find(BodyWrapper).text()).toEqual('profile');
  });

  it('should render 1 DisplayPanel component when clicking NavigationButton', () => {
    profile.find(NavigationButton).simulate('click');
    expect(element.find(DisplayPanel).length).toEqual(1);
  });

  describe('Profile DisplayPanel', () => {
    beforeEach(() => {
      profile.find(NavigationButton).simulate('click');
    });

    it('should render 1 ProfileList component', () => {
      expect(element.find(ProfileList).length).toEqual(1);
    });

    it('should render 3 ProfileListItem component', () => {
      expect(element.find(ProfileListItem).length).toEqual(3);
    });

    it('should render 3 PanelLink component', () => {
      expect(element.find(PanelLink).length).toEqual(3);
    });

    it("should render 'My dashboard' PanelLink component", () => {
      const dashboard = element.find(PanelLink).at(0);
      expect(dashboard.props().href).toEqual(DASHBOARD_LINK);
      expect(dashboard.text()).toEqual('My dashboard');
    });

    it("should render 'My property report' PanelLink component", () => {
      const propertyReport = element.find(PanelLink).at(1);
      expect(propertyReport.props().href).toEqual(PROPERTY_REPORT_LINK);
      expect(propertyReport.text()).toEqual('My property report');
    });

    it("should render 'Log out' PanelLink component", () => {
      const propertyReport = element.find(PanelLink).at(2);
      expect(propertyReport.text()).toEqual('Log out');
    });

    it("should call 'onLogout' function when clicking 'Log out' PanelLink component", () => {
      const propertyReport = element.find(PanelLink).at(2);
      propertyReport.simulate('click');
      expect(onLogout).toBeCalled();
    });

    it('should render 1 Line component', () => {
      expect(element.find(Line).length).toEqual(1);
    });

    it('should render 1 InputIcon component', () => {
      expect(element.find(InputIcon).length).toEqual(1);
    });
  });
});
