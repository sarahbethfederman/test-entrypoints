import * as React from 'react';
import styled from 'styled-components';
import { heading, body } from '@lendi-ui/typography';
import { p, mt } from '@lendi-ui/spacing';

const FeatureItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${p('sm')};
`;

export const Title = styled.div`
  ${heading({ size: 'sm' })} ${mt('xs')};
`;

const Subtitle = styled.p`
  ${body({ size: 'md', align: 'center' })} ${mt('xs')};
`;

export interface FeatureItemProps {
  title?: React.ReactNode;
  subtitle: React.ReactNode;
  icon: React.ReactNode;
}

export const FeatureItem = (props: FeatureItemProps) => (
  <FeatureItemWrapper>
    <div>{props.icon}</div>
    {props.title && <Title>{props.title}</Title>}
    <Subtitle>{props.subtitle}</Subtitle>
  </FeatureItemWrapper>
);
