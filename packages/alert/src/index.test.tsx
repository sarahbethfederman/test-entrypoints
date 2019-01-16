import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Alert from './index';
import { Wrapper, IconWrapper, HeaderWrapper, HeadingWrapper, ContentWrapper } from './index.style';
import { Info, Success, Warn } from '@lendi-ui/icon';

let element, variant;

function render(props) {
  element = mount(
    <Theme>
      <Alert variant="error" {...props}>
        Error description
      </Alert>
    </Theme>
  );
}

describe('Alert', () => {
  it('it should mount Alert component without heading', () => {
    render({});
    expect(element.find(Alert)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(IconWrapper)).toHaveLength(1);
    expect(element.find(Warn)).toHaveLength(1);
    expect(element.find(Warn).props().color).toEqual('error.500');
    expect(element.find(ContentWrapper)).toHaveLength(1);
    expect(element.find(Alert)).toMatchSnapshot();
  });

  it('it should mount Alert component with heading', () => {
    const heading = 'Alert label';
    render({ heading });
    expect(element.find(Alert)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(HeaderWrapper)).toHaveLength(1);
    expect(element.find(HeadingWrapper)).toHaveLength(1);
    expect(element.find(IconWrapper)).toHaveLength(1);
    expect(element.find(Warn)).toHaveLength(1);
    expect(element.find(Warn).props().color).toEqual('error.500');
    expect(element.find(ContentWrapper)).toHaveLength(1);
    expect(element.find(Alert)).toMatchSnapshot();
  });

  it("it should mount Alert component with variant is 'error'", () => {
    variant = 'error';
    render({ variant });
    expect(element.find(Warn)).toHaveLength(1);
    expect(element.find(Warn).props().color).toEqual('error.500');
  });

  it("it should mount Alert component with variant is 'info'", () => {
    variant = 'info';
    render({ variant });
    expect(element.find(Info)).toHaveLength(1);
    expect(element.find(Info).props().color).toEqual('info.500');
  });

  it("it should mount Alert component with variant is 'success'", () => {
    variant = 'success';
    render({ variant });
    expect(element.find(Success)).toHaveLength(1);
    expect(element.find(Success).props().color).toEqual('success.500');
  });

  it("it should mount Alert component with variant is 'warn'", () => {
    variant = 'warn';
    render({ variant });
    expect(element.find(Warn)).toHaveLength(1);
    expect(element.find(Warn).props().color).toEqual('warn.500');
  });
});
