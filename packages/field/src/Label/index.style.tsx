import styled from 'styled-components';
import { Body, Heading } from '@lendi-ui/typography';
import { mr, ml } from '@lendi-ui/spacing';

export type LabelSize = 'lg' | 'sm';

export const LabelBody = styled(Body)`
  display: inline-block;
  ${mr('xxs')} ${ml('nil')};
`;

export const LabelHeading = styled(Heading)`
  display: inline-block;
  ${mr('sm')} ${ml('nil')};
`;

export const AssistiveBody = styled(Body)`
  ${ml('nil')};
`;
