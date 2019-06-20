import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { LUIGlobalProps } from '@lendi-ui/utils';
import AuthLoader from './index';
import { Wrapper, Main, LendiLogoSvgWrapper, LendiLogoPathWrapper } from './index.style';
import { Body } from '@lendi-ui/typography';

let element: ReactWrapper<LUIGlobalProps>;

describe('AuthLoader', () => {
  beforeEach(() => {
    element = mount(
      <Theme>
        <AuthLoader />
      </Theme>
    );
  });

  it('it should render the whole AuthLoader component', () => {
    expect(element.find(AuthLoader)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
  });

  it('it should render the component that wrap svg and content', () => {
    expect(element.find(Main)).toHaveLength(1);
  });

  it('it should render the svg and path component', () => {
    expect(element.find(LendiLogoSvgWrapper)).toHaveLength(1);
    expect(element.find(LendiLogoPathWrapper)).toHaveLength(1);
  });

  it('it should render the Body component', () => {
    expect(element.find(Body)).toHaveLength(1);
  });
});
