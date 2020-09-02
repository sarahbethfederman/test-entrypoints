import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { ExpertAdvice, ExpertAdviceProps } from './index';
import { Telephone, PickATime, LiveChat, HereToHelp } from '@lendi-ui/fancy-icon';
import {
  Wrapper,
  HeadingWrapper,
  LinkGroup,
  BodyWrapper,
  LinkWrapper,
  LinkWrapperOne,
  LinkWrapperTwo,
} from './index.style';

let element: ReactWrapper<ExpertAdviceProps>;

describe('ExpertAdvice', () => {
  const onChat = jest.fn();
  beforeEach(() => {
    element = mount(
      <Theme>
        <ExpertAdvice onChat={onChat} />
      </Theme>
    );
  });

  it('should render the whole ExpertAdvice component', () => {
    expect(element.find(ExpertAdvice)).toHaveLength(1);
    expect(element.find(Wrapper)).toHaveLength(1);
  });

  it('should render the HeadingWrapper component', () => {
    expect(element.find(HeadingWrapper)).toHaveLength(1);
    expect(element.find(HeadingWrapper).text()).toEqual('Contact us for free expert home loan advice');
  });

  it('should render 2 LinkGroup component and each LinkGroup includes one LinkWrapperOne and one LinkWrapperTwo component', () => {
    expect(element.find(LinkGroup)).toHaveLength(2);

    const linkGroupOne = element.find(LinkGroup).at(0);
    const linkGroupTwo = element.find(LinkGroup).at(1);
    expect(linkGroupOne.find(LinkWrapperOne)).toHaveLength(1);
    expect(linkGroupOne.find(LinkWrapperTwo)).toHaveLength(1);
    expect(linkGroupTwo.find(LinkWrapperOne)).toHaveLength(1);
    expect(linkGroupTwo.find(LinkWrapperTwo)).toHaveLength(1);
  });

  it('the first LinkWrapperOne in LinkGroup component should render one LinkWrapper, one Telephone component and one BodyWrapper component', () => {
    const linkGroupWrapperOne = element.find(LinkGroup).at(0).find(LinkWrapperOne);
    expect(linkGroupWrapperOne.find(LinkWrapper)).toHaveLength(1);
    expect(linkGroupWrapperOne.find(LinkWrapper).props().href).toEqual('tel:1300323181');
    expect(linkGroupWrapperOne.find(Telephone)).toHaveLength(1);
    expect(linkGroupWrapperOne.find(BodyWrapper)).toHaveLength(1);
    expect(linkGroupWrapperOne.find(BodyWrapper).text()).toEqual('1300 323 181');
  });

  it('the first LinkWrapperOne in LinkGroup component should render one LinkWrapper, one Telephone component and one BodyWrapper component', () => {
    const linkGroupWrapperTwo = element.find(LinkGroup).at(0).find(LinkWrapperTwo);
    expect(linkGroupWrapperTwo.find(LinkWrapper)).toHaveLength(1);
    expect(linkGroupWrapperTwo.find(LinkWrapper).props().href).toEqual('/appointment-booking');
    expect(linkGroupWrapperTwo.find(PickATime)).toHaveLength(1);
    expect(linkGroupWrapperTwo.find(BodyWrapper)).toHaveLength(1);
    expect(linkGroupWrapperTwo.find(BodyWrapper).text()).toEqual('Book an appointment');
  });

  it('the first LinkWrapperOne in LinkGroup component should render one LinkWrapper, one Telephone component and one BodyWrapper component', () => {
    const linkGroupWrapperOne = element.find(LinkGroup).at(1).find(LinkWrapperOne);
    expect(linkGroupWrapperOne.find(LinkWrapper)).toHaveLength(1);
    linkGroupWrapperOne.find(LinkWrapper).simulate('click');
    expect(onChat).toBeCalled();
    expect(linkGroupWrapperOne.find(LiveChat)).toHaveLength(1);
    expect(linkGroupWrapperOne.find(BodyWrapper)).toHaveLength(1);
    expect(linkGroupWrapperOne.find(BodyWrapper).text()).toEqual('Live chat');
  });

  it('the first LinkWrapperOne in LinkGroup component should render one LinkWrapper, one Telephone component and one BodyWrapper component', () => {
    const linkGroupWrapperTwo = element.find(LinkGroup).at(1).find(LinkWrapperTwo);
    expect(linkGroupWrapperTwo.find(LinkWrapper)).toHaveLength(1);
    expect(linkGroupWrapperTwo.find(LinkWrapper).props().href).toEqual('mailto:heretohelp@lendi.com.au');
    expect(linkGroupWrapperTwo.find(HereToHelp)).toHaveLength(1);
    expect(linkGroupWrapperTwo.find(BodyWrapper)).toHaveLength(1);
    expect(linkGroupWrapperTwo.find(BodyWrapper).text()).toEqual('heretohelp@lendi.com.au');
  });
});
