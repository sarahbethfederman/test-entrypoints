import styled from 'styled-components';
import { px, pt, pb, ml } from '@lendi-ui/spacing';
import { color } from '@lendi-ui/color';
import { heading, body, Link } from '@lendi-ui/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  ${pt('xl')}
  ${pb('md')}
  ${px('xxs')}
  flex-shrink: 0;
  border-bottom: 1px solid ${color('shade.100')}
`;

export const BrokerWrapper = styled.div`
  display: flex;
  align-items: center;
  ${px('sm')};
`;

export const BrokerFaces = styled.img`
  width: 80%
  display: block;
  margin: auto;
`;

export const BrokerFace = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid ${color('shade.100')};
  margin: 1rem;
`;

export const BrokerDetail = styled.div`
  display: flex;
  flex-direction: column;
  ${ml('xxs')};
`;

export const BrokerName = styled.div`
  ${heading({ size: 'md' })};
`;

export const BrokerRole = styled.div`
  ${body({ size: 'sm', color: 'shade.500' })};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
`;
