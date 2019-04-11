import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import StatusBadge from './index';
import { Wrapper, IconWrapper, ContentWrapper } from './index.style';
import { InfoTwo, SuccessTwo, WarnTwo } from '@lendi-ui/icon';

let element, variant;

function render(props) {
  element = mount(
    <Theme>
      <StatusBadge variant="success" hasIcon={true} statusText="COMPLETED" {...props} />
    </Theme>
  );
}

describe('StatusBadge', () => {
  it('it should mount StatusBadge component without icon', () => {
    render({ icon: false });
    expect(element.find(StatusBadge)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(ContentWrapper)).toHaveLength(1);
    expect(element.find(StatusBadge)).toMatchSnapshot();
  });

  it('it should mount StatusBadge component with icon', () => {
    render({});
    expect(element.find(StatusBadge)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
    expect(element.find(IconWrapper)).toHaveLength(1);
    expect(element.find(SuccessTwo)).toHaveLength(1);
    expect(element.find(SuccessTwo).props().color).toEqual('success.500');
    expect(element.find(ContentWrapper)).toHaveLength(1);
    expect(element.find(StatusBadge)).toMatchSnapshot();
  });

  it("it should mount the StatusBadge component when variant is 'error'", () => {
    variant = 'error';
    render({ variant });
    expect(element.find(WarnTwo)).toHaveLength(1);
    expect(element.find(WarnTwo).props().color).toEqual('error.500');
  });

  it("it should mount the StatusBadge component when variant is 'info'", () => {
    variant = 'info';
    render({ variant });
    expect(element.find(InfoTwo)).toHaveLength(1);
    expect(element.find(InfoTwo).props().color).toEqual('info.500');
  });

  it("it should mount the StatusBadge component when variant is 'success'", () => {
    variant = 'success';
    render({ variant });
    expect(element.find(SuccessTwo)).toHaveLength(1);
    expect(element.find(SuccessTwo).props().color).toEqual('success.500');
  });

  it("it should mount the StatusBadge component when variant is 'warn'", () => {
    variant = 'warn';
    render({ variant });
    expect(element.find(WarnTwo)).toHaveLength(1);
    expect(element.find(WarnTwo).props().color).toEqual('warn.500');
  });
});