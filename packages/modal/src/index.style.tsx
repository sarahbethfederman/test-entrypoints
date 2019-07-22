import styled, { css } from 'styled-components';
import { body } from '@lendi-ui/typography';
import { bg, color } from '@lendi-ui/color';
import { gte } from '@lendi-ui/breakpoint';
import { p, py, px, pl, pr, pt, pb } from '@lendi-ui/spacing';
import { Close } from '@lendi-ui/icon';
import { depth } from '@lendi-ui/depth';
import { select } from '@lendi-ui/theme';
import { normalise, deriveSize } from '@lendi-ui/utils';

interface ContainerProps {
  show: boolean;
  size?: ModalSize;
  fixedHeader?: boolean;
}

interface CloseProps {
  onClick: () => void;
}

export type ModalSize = 'lg' | 'md' | 'sm';
export type HeadingSize = 'xs' | 'sm' | 'md';

export const widthBySize: { [size in ModalSize]: string } = {
  lg: deriveSize(37.5), // 600px @ desktop res
  md: deriveSize(25), // 400px @ desktop res
  sm: deriveSize(22), // 352px @ desktop res
};

export const Wrapper = styled.div`
  ${normalise};
  position: fixed;
  z-index: 20;
  width: 600px;
`;

export const Content = styled.div``;
export const Footer = styled.div``;

export const HeaderWrapper = styled.div`
  ${bg('shade.50')};
  min-height: ${deriveSize(2.5)};
  margin-bottom: -1px;
  border-bottom: 1px solid ${color('shade.50')};
  ${gte('tablet')`
    border-radius: ${select('borderRadius')} ${select('borderRadius')} 0 0;
  `}
  ${py('xxs')};
  ${pl('xs')};
  ${pr('xxl')};
  display: flex;
  flex: 0 1 auto;
`;

export const TitlesWrapper = styled.div`
  margin: auto 0;
`;

export const Subtitle = styled.p`
  overflow-wrap: normal;
  ${body({ size: 'xs' })};
  margin: 0;
  ${pb('xxxs')}
`;

export const Container = styled.div`
  ${({ size = 'md', fixedHeader }: ContainerProps) => css`
    display: ${(props: ContainerProps) => (props.show ? 'flex;' : 'none')};
    flex-direction: column;
    opacity: 0.97;
    z-index: 10;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0;
    ${bg('shade.25')};
    ${gte('tablet')`
      width: ${widthBySize[size]};
      border-radius: ${select('borderRadius')};
      height: initial;
      max-height: 85vh;
      opacity: 1;
    `}

    ${Content} {
      ${pt(fixedHeader ? 'sm' : 'xxxl')}
      ${pb('xl')}
      ${px('md')}
      ${gte('tablet')`
        ${size === 'lg' && px('lg')};
      `}
      flex: 1 1 auto;
      min-height: 0;
      overflow: auto;
    }

    ${Footer} {
      ${py('sm')}
      ${px('md')}
      border-radius: 0;
      ${depth(3)}
      ${gte('tablet')`
        border-bottom-left-radius: ${select('borderRadius')};
        border-bottom-right-radius: ${select('borderRadius')};
        ${size === 'lg' && px('lg')};
      `}
      flex: 0 1 auto;
    }
  `};
`;

export const CloseIcon = styled(Close)<CloseProps>`
  ${p('sm')} right: 0;
  width: 32px;
  height: 32px;
  position: absolute;
  cursor: pointer;
`;
