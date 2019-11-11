import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { Heading } from '@lendi-ui/typography';
import { KeyboardArrowRight } from '@lendi-ui/icon';

import {
  Wrapper,
  NavigationPanel,
  NavigationItem,
  NavigationButton,
  BodyWrapper,
  BarWrapper,
  Bar,
  ExpandMoreWrapper,
  HeadingLink,
} from '../../../Marketing/components/NavigationButtons/index.style';
import {
  SEMDisplayPanel,
  UnitWrapper,
  MenuWrapper,
  SEMLinksGroup,
  SEMPanelButton,
  SEMLinkItem,
  SEMPanelLink,
} from './index.style';
import { SIGN_UP_LINK } from '../../../constants/links';
import { defaultMenu } from '../../../constants/menu-data';

import { SEMNavigationButtons, SEMNavigationButtonsProps } from './index';

let element: ReactWrapper<SEMNavigationButtonsProps>;

const render = (props: SEMNavigationButtonsProps) => {
  element = mount(
    <Theme>
      <SEMNavigationButtons params="" {...props} />
    </Theme>
  );
};

describe('unAuthenticated SEMNavigationButtons', () => {
  beforeEach(() => {
    render({ isAuthenticated: false });
  });

  it('should render one SEMNavigationButtons component', () => {
    expect(element.find(SEMNavigationButtons).length).toEqual(1);
  });

  it('should render one Wrapper component', () => {
    expect(element.find(Wrapper).length).toEqual(1);
  });

  it('should render one NavigationPanel component', () => {
    expect(element.find(NavigationPanel).length).toEqual(1);
  });

  describe('NavigationPanel', () => {
    let wrapper: ReactWrapper;
    beforeEach(() => {
      wrapper = element.find(NavigationPanel);
    });

    it('should render one NavigationItem component in NavigationPanel', () => {
      expect(wrapper.find(NavigationItem).length).toEqual(1);
    });

    it('should render one NavigationButton component in NavigationPanel', () => {
      expect(wrapper.find(NavigationButton).length).toEqual(1);
    });

    it('should render one BarWrapper component in NavigationPanel', () => {
      expect(wrapper.find(BarWrapper).length).toEqual(1);
    });

    it('should render one BodyWrapper component in NavigationPanel', () => {
      expect(wrapper.find(BodyWrapper).length).toEqual(1);
    });

    it("should render the BodyWrapper component with text 'menu' in NavigationPanel", () => {
      expect(wrapper.find(BodyWrapper).text()).toEqual('menu');
    });

    it('should render one ExpandMoreWrapper component in NavigationPanel', () => {
      expect(wrapper.find(ExpandMoreWrapper).length).toEqual(1);
    });

    it('should render one Bar component in NavigationPanel', () => {
      expect(wrapper.find(Bar).length).toEqual(1);
    });
  });

  describe('SEMDisplayPanel', () => {
    let displayPanel: ReactWrapper;
    const gridSize = defaultMenu.length;
    beforeEach(() => {
      render({ isAuthenticated: false, isOpenNavigationPanel: true });
      displayPanel = element.find(SEMDisplayPanel);
    });

    it('should render one SEMDisplayPanel component in SEMNavigationButtons', () => {
      expect(displayPanel.length).toEqual(1);
    });

    it(`should render ${gridSize} UnitWrapper component in SEMDisplayPanel`, () => {
      expect(displayPanel.find(UnitWrapper).length).toEqual(gridSize);
    });

    defaultMenu.map((menu, index) => {
      describe(`the UnitWrapper with number ${index}`, () => {
        let unitWrapper: ReactWrapper;
        beforeEach(() => {
          unitWrapper = displayPanel.find(UnitWrapper).at(index);
        });

        it('should render one MenuWrapper component in UnitWrapper', () => {
          expect(unitWrapper.find(MenuWrapper).length).toEqual(1);
        });

        it('should render one HeadingLink component in UnitWrapper', () => {
          expect(unitWrapper.find(HeadingLink).length).toEqual(1);
        });

        it(`should render the HeadingLink component with 'href = ${menu.link}' in UnitWrapper`, () => {
          expect(unitWrapper.find(HeadingLink).props().href).toEqual(menu.link);
        });

        it('should render one Heading component in UnitWrapper', () => {
          expect(unitWrapper.find(Heading).length).toEqual(1);
        });

        it(`should render the Heading component with text ${menu.label} in UnitWrapper`, () => {
          expect(unitWrapper.find(Heading).text()).toEqual(menu.label);
        });

        it('should render one KeyboardArrowRight component in UnitWrapper', () => {
          expect(unitWrapper.find(KeyboardArrowRight).length).toEqual(1);
        });

        if (menu.label === 'Home loans') {
          it('should render one SEMPanelButton component in UnitWrapper', () => {
            expect(unitWrapper.find(SEMPanelButton).length).toEqual(1);
          });

          it("should render the SEMPanelButton component with 'variant = primary'  in UnitWrapper", () => {
            expect(unitWrapper.find(SEMPanelButton).props().variant).toEqual('primary');
          });

          it(`should render the SEMPanelButton component with 'href = ${SIGN_UP_LINK}'  in UnitWrapper`, () => {
            expect(unitWrapper.find(SEMPanelButton).props().href).toEqual(SIGN_UP_LINK);
          });

          it(`should render the SEMPanelButton component with 'text = SIGN UP / CONTINUE'  in UnitWrapper`, () => {
            expect(unitWrapper.find(SEMPanelButton).text()).toEqual('SIGN UP / CONTINUE');
          });
        }

        it('should render one SEMLinksGroup component in UnitWrapper', () => {
          expect(unitWrapper.find(SEMLinksGroup).length).toEqual(1);
        });

        menu.children.map((child, childIndex) => {
          describe('SEMLinksGroup', () => {
            let semLinksGroup: ReactWrapper;
            beforeEach(() => {
              semLinksGroup = displayPanel.find(SEMLinkItem).at(childIndex);
            });

            it('should render one SEMLinkItem component in SEMLinksGroup', () => {
              expect(semLinksGroup.length).toEqual(1);
            });

            it('should render one SEMPanelLink component in SEMLinksGroup', () => {
              expect(semLinksGroup.find(SEMPanelLink).length).toEqual(1);
            });
          });
        });
      });
    });
  });
});
