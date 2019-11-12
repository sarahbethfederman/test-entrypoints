import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import NavbarBase from './components/NavbarBase';
import { NavbarBaseProps } from './types';
import { useNavbarBaseContext } from './context/NavbarContext';
import { Button, ButtonGroup } from '@lendi-ui/button';
import styled from 'styled-components';
import { ChildrenWrapper } from './index.style';

let element: ReactWrapper<NavbarBaseProps>;

describe('NavbarBase', () => {
  beforeEach(() => {
    element = mount(
      <Theme>
        <NavbarBase />
      </Theme>
    );
  });

  it('should mount', () => {
    expect(element.find(NavbarBase)).toHaveLength(1);
    expect(element.find(NavbarBase)).toMatchSnapshot();
  });
});

describe('Navbarbase with children', () => {
  beforeEach(() => {
    element = mount(
      <Theme>
        <NavbarBase>
          <NavbarBase.Left>
            <a href="/">The link</a>
          </NavbarBase.Left>
          <NavbarBase.Right>
            <button>The button</button>
          </NavbarBase.Right>
        </NavbarBase>
      </Theme>
    );
  });
  it('should render with Left, Center and Right content', () => {
    expect(element.find('a').text()).toEqual('The link');
    expect(element.find('button').text()).toEqual('The button');
  });
});

const InitButtons = () => {
  const { isTransparent } = useNavbarBaseContext();
  return (
    <ButtonGroup size="sm" isInverse={isTransparent}>
      <ButtonGroup.Button variant="secondary">Continue</ButtonGroup.Button>
      <ButtonGroup.Button variant="secondary">Next</ButtonGroup.Button>
    </ButtonGroup>
  );
};

describe('Navbarbase children to use Transparent property from NavbarBaseContext', () => {
  beforeEach(() => {
    element = mount(
      <Theme>
        <NavbarBase isTransparent={true}>
          <NavbarBase.Left>
            <a href="/">The link</a>
          </NavbarBase.Left>
          <NavbarBase.Right>
            <InitButtons />
          </NavbarBase.Right>
        </NavbarBase>
      </Theme>
    );
  });
  it('should render with inverse styled button', () => {
    const buttons = element.find(Button);
    buttons.forEach((button) => expect(button.prop('isInverse')).toBeTruthy());
  });
});

describe('Navbarbase to entertain style from consumer', () => {
  const NavbarBaseWrapper = styled(NavbarBase)`
    height: 100px;
  `;
  beforeEach(() => {
    element = mount(
      <Theme>
        <NavbarBaseWrapper isTransparent={true}>
          <NavbarBase.Left>
            <a href="/">The link</a>
          </NavbarBase.Left>
          <NavbarBase.Right>
            <InitButtons />
          </NavbarBase.Right>
        </NavbarBaseWrapper>
      </Theme>
    );
  });
  it('should render with inverse styled button', () => {
    const childrenWrapper = element.find(ChildrenWrapper);
    expect(childrenWrapper).toHaveStyleRule('height', '100px');
  });
});
