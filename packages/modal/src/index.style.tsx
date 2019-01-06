import styled, { css } from 'styled-components';
import { bg } from '@lendi-ui/color';
import { gte } from '@lendi-ui/breakpoint';
import { m, py, px, pt, pb } from '@lendi-ui/spacing';
import { Close } from '@lendi-ui/icon';
import { depth } from '@lendi-ui/depth';

interface ContainerProps {
  show: boolean;
  size?: ModalSize;
}

interface CloseProps {
  onClick: () => void;
}

export type ModalSize = 'lg' | 'md' | 'sm';

export const widthBySize: { [size in ModalSize]: string } = {
  lg: '600px',
  md: '400px',
  sm: '352px',
};

export const Wrapper = styled.div`
  position: fixed;
  z-index: 20;
  background-color: #fff;
  width: 600px;
  padding: 80px;
`;

export const Footer = styled.div``;
export const Content = styled.div``;

export const Container = styled.div`
  ${({ size = 'md' }: ContainerProps) => css`
    display: ${(props: ContainerProps) => (props.show ? 'grid;' : 'none')};
    grid-template-rows: 3fr auto;
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
      border-radius: 6px;
      height: initial;
      opacity: 1;
    `}

    ${Content} {
      ${pt('xxxl')}
      ${pb('xl')}
      ${px('md')}
      ${gte('tablet')`
        ${size === 'lg' && px('lg')};
      `}
    }

    ${Footer} {
      ${py('sm')}
      ${px('md')}
      border-radius: 0;
      ${depth(3)}
      ${gte('tablet')`
        border-radius: 6px;
        ${size === 'lg' && px('lg')};
      `}
    }
  `};
`;

export const CloseIcon = styled(Close)<CloseProps>`
  ${m('md')} right: 0;
  width: 19px;
  height: 19px;
  position: absolute;
  cursor: pointer;
`;
