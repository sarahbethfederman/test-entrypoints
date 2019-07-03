import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { PHONE } from '../../constants/contact';
import { RightPanelSection, RightPanelSectionProps } from './index';

const mountRightPanelSection = (props?: Partial<RightPanelSectionProps>) =>
  mount(
    <Theme>
      <RightPanelSection onChat={jest.fn()} {...props} />
    </Theme>
  );

describe('RightPanelSection', () => {
  it('renders', () => {
    expect(() => mountRightPanelSection()).not.toThrow();
  });

  it('renders a phone number', () => {
    const phoneNumber = '1234';
    const wrapper = mountRightPanelSection({ phoneNumber });

    expect(wrapper.find({ children: phoneNumber })).toHaveLength(1);
  });

  it('defaults to the lendi phone number', () => {
    const wrapper = mountRightPanelSection();

    expect(wrapper.find({ children: PHONE })).toHaveLength(1);
  });

  it('formats the href correctly for phone number', () => {
    const phoneNumber = '1300 323 181';
    const phoneNumberHref = 'tel:+611300323181';

    const wrapper = mountRightPanelSection({ phoneNumber });

    expect(wrapper.find({ children: phoneNumber }).props().href).toBe(phoneNumberHref);
  });

  it('renders Upload Documents if passed application number', () => {
    const wrapper = mountRightPanelSection({ applicationNumber: 1234 });

    expect(wrapper.find({ children: 'Upload your documents' })).toHaveLength(1);
  });

  it('does not render Upload Documents without application number', () => {
    const wrapper = mountRightPanelSection();

    expect(wrapper.find({ children: 'Upload your documents' })).toHaveLength(0);
  });

  it('uses applicationNumber href for Upload Documents', () => {
    const applicationNumber = 1234;
    const wrapper = mountRightPanelSection({ applicationNumber });

    expect(wrapper.find({ children: 'Upload your documents' }).props().href).toContain(applicationNumber);
  });
});
