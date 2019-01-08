import styled from 'styled-components';
import { py, mx, my, mt, mb } from '@lendi-ui/spacing';
import { gte } from '@lendi-ui/breakpoint';
import { bg, fg } from '@lendi-ui/color';
import { body, link } from '@lendi-ui/typography';

export const InnerWrapper = styled.div`
  overflow-wrap: normal;
`;

export const AllLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mt({ mobile: 'sm', tablet: 'md', desktop: 'md' })};
  ${mb('md')};
  overflow: auto;
  ${gte('tablet')`
    flex-wrap: initial;
    justify-content: center;
  `};
`;

export const LinkWrapper = styled.div`
  display: inline-block;
  ${py('xxxs')};
`;

export const Separator = styled.div`
  height: 20px;
  width: 1px;
  ${bg('shade.0')};
  display: inline-block;
  vertical-align: middle;
  ${mx('md')};
`;

export const PageLink = styled.a`
  ${link({ color: 'shade.0', size: { mobile: 'sm', tablet: 'md', desktop: 'md' } })};
  display: inline-block;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  :hover,
  :active,
  :focus {
    ${fg('shade.0')} text-decoration: none;
  }
`;

export const ContactInfo = styled.div`
  ${body({ size: 'sm', color: 'shade.0', align: { mobile: 'left', tablet: 'center', desktop: 'center' } })};
  ${my('sm')};
  display: flex;
  flex-direction: column;

  ${gte('tablet')`
    flex-direction: row;
    justify-content: center;
  `};
`;

export const AddressSeparator = styled.span`
  display: none;
  ${gte('tablet')`
    display: inline-block;
    ${mx('xs')};
  `};
`;

export const LendiPhone = styled.a`
  ${link({ color: 'shade.0' })};
  text-decoration: none;
  font-weight: normal;
  :hover {
    ${fg('shade.0')} text-decoration: none;
  }
`;

export const CompanyName = styled.div`
  ${body({ size: 'sm', color: 'shade.0' })};
  font-weight: bold;
`;
