import * as React from 'react';
import { Telephone, PickATime, LiveChat, HereToHelp } from '@lendi-ui/fancy-icon';
import { LUIGlobalProps } from '@lendi-ui/utils';
import {
  Wrapper,
  HeadingWrapper,
  LinkGroup,
  BodyWrapper,
  LinkWrapper,
  LinkWrapperOne,
  LinkWrapperTwo,
} from './index.style';

export interface ExpertAdviceProps extends LUIGlobalProps {
  onChat?: () => void;
}

export const ExpertAdvice = ({ onChat }: ExpertAdviceProps) => (
  <Wrapper>
    <HeadingWrapper size="xl" color="shade.0">
      Contact us for free expert home loan advice
    </HeadingWrapper>
    <LinkGroup>
      <LinkWrapperOne>
        <LinkWrapper href="tel:1300323181">
          <Telephone width="1.5em" height="1.5em" />
          <BodyWrapper>1300 323 181</BodyWrapper>
        </LinkWrapper>
      </LinkWrapperOne>
      <LinkWrapperTwo>
        <LinkWrapper href="/appointment-booking">
          <PickATime width="1.5em" height="1.5em" />
          <BodyWrapper>Book an appointment</BodyWrapper>
        </LinkWrapper>
      </LinkWrapperTwo>
    </LinkGroup>
    <LinkGroup>
      <LinkWrapperOne>
        <LinkWrapper onClick={onChat}>
          <LiveChat width="1.5em" height="1.5em" />
          <BodyWrapper>Live chat</BodyWrapper>
        </LinkWrapper>
      </LinkWrapperOne>
      <LinkWrapperTwo>
        <LinkWrapper href="mailto:heretohelp@lendi.com.au">
          <HereToHelp width="1.5em" height="1.5em" />
          <BodyWrapper>heretohelp@lendi.com.au</BodyWrapper>
        </LinkWrapper>
      </LinkWrapperTwo>
    </LinkGroup>
  </Wrapper>
);
