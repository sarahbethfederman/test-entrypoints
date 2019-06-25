import styled, { css } from 'styled-components';
import { container } from '@lendi-ui/container';
import { Link } from '@lendi-ui/typography';
import { normalise } from '@lendi-ui/utils';
import { px, py, mx, mt, ml } from '@lendi-ui/spacing';
import { gte } from '@lendi-ui/breakpoint';
import { bg, fg } from '@lendi-ui/color';
import { Facebook, Twitter, Linkedin, Youtube } from '@lendi-ui/icon';

export const Wrapper = styled.div`
  ${normalise};
  ${container};
  ${bg('shade.0')};
  ${py('lg')};
  ${px('md')};
  ${gte('tablet')`
    ${px('xxxl')};
  `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  ${gte('desktop')`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const SectionWrapperOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${gte('tablet')`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  `}
  ${gte('desktop')`
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
  `}
`;

export const SectionWrapperTwo = styled(SectionWrapperOne.withComponent('div'))`
  ${mt('nil')};
  ${gte('tablet')`
    ${mt('lg')};
  `}
`;

export const LinksWrapper = styled.div`
  min-width: 372px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mt('lg')};
  ${gte('tablet')`
    flex-direction: row;
  `}
`;

export const PageLink = styled(Link)`
  text-decoration: none;
  ${fg('shade.700')}
  :hover,
  :focus,
  :active {
    ${fg('shade.700')}
  }
`;

export const Separator = styled.div`
  height: 17.5px;
  width: 2px;
  ${bg('shade.700')};
  display: inline-block;
  vertical-align: middle;
  ${mx('xxs')};
`;

export const LinksGroup = styled.div`
  font-weight: bold;
  line-height: 1.43;
`;

export const SocialWrapper = styled.div`
  min-width: 188px;
  ${mt('lg')};
  ${gte('tablet')`
    ${mt('nil')};
  `}
`;

export const SocialLink = styled(Link)`
  ${ml('xs')}
`;

const animationIcon = () => css`
  :hover {
    transform: scale(1.2);
  }
  transition: all 100ms linear;
`;

export const FaceBookWrapper = styled(Facebook)`
  ${animationIcon};
`;

export const TwitterWrapper = styled(Twitter)`
  ${animationIcon};
`;

export const LinkedinWrapper = styled(Linkedin)`
  ${animationIcon};
`;

export const YoutubeWrapper = styled(Youtube)`
  ${animationIcon};
`;
