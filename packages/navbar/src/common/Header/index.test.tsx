import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Theme from '@lendi-ui/theme';

import { HeaderButton, ApplicationStatusButton } from './index.style';
import { SIGN_UP_LINK, SEARCH_LOAN_LINK } from '../../constants/links';
import { ButtonVariationProps, ButtonVariation } from './index';

let element: ReactWrapper<ButtonVariationProps>;

const render = (props: ButtonVariationProps) => {
  element = mount(
    <Theme>
      <ButtonVariation {...props} />
    </Theme>
  );
};

describe('unAuthed <ButtonVariation />', () => {
  beforeEach(() => render({}));

  it('should render 1 <HeaderButton />', () => {
    expect(element.find(HeaderButton).length).toEqual(1);
  });

  it("should render <HeaderButton /> as 'primary' button", () => {
    expect(element.find(HeaderButton).props().variant).toEqual('primary');
  });

  it("should render <HeaderButton /> href is 'SIGN_UP_LINK'", () => {
    expect(element.find(HeaderButton).props().href).toEqual(SIGN_UP_LINK);
  });
});

describe('Authed <ButtonVariation />', () => {
  beforeEach(() => render({ isAuthenticated: true }));

  it('should render 1 <ApplicationStatusButton />', () => {
    expect(element.find(ApplicationStatusButton).length).toEqual(1);
  });

  it("should render <ApplicationStatusButton /> as 'emphasis' button", () => {
    expect(element.find(ApplicationStatusButton).props().variant).toEqual('emphasis');
  });

  it("should render <ApplicationStatusButton /> href is 'SEARCH_LOAN_LINK'", () => {
    expect(element.find(ApplicationStatusButton).props().href).toEqual(SEARCH_LOAN_LINK);
  });
});

describe('Authed <ButtonVariation /> with applications', () => {
  beforeEach(() => render({ isAuthenticated: true, continueApplicationUrl: 'application_1' }));

  it('should render 1 <ApplicationStatusButton />', () => {
    expect(element.find(ApplicationStatusButton).length).toEqual(1);
  });

  it("should render <ApplicationStatusButton /> as 'emphasis' button", () => {
    expect(element.find(ApplicationStatusButton).props().variant).toEqual('emphasis');
  });

  it("should render <ApplicationStatusButton /> href is 'application_1'", () => {
    expect(element.find(ApplicationStatusButton).props().href).toEqual('application_1');
  });
});
