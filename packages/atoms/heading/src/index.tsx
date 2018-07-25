// @ts-ignore
import * as React from 'react';
import styled, { css } from 'styled-components';
import * as colors from '@auscred/color';

export type HeadingColor = 'colorBrandPrimary' | 'colorShadeLight1' | 'colorShadeDark2';
export type HeadingAlignment = 'left' | 'center' | 'right';

export interface HeadingProps {
  color?: HeadingColor;
  textAlign?: HeadingAlignment;
}

const headingMixin = css`
  font-family: Cabin;
  color: ${({ color = 'colorShadeDark2' }: HeadingProps) => colors[color]};
  text-align: ${({ textAlign = 'initial' }: HeadingProps) => textAlign};
`;

const H1 = styled.h1`
  font-size: 46px;
  line-height: 56px;
  font-weight: bold;
  ${headingMixin};
`;

const H2 = styled.div`
  font-size: 37px;
  line-height: 48px;
  font-weight: semi-bold;
  ${headingMixin};
`;

const H3 = styled.div`
  font-size: 28px;
  line-height: 36px;
  font-weight: semi-bold;
  ${headingMixin};
`;

const H4 = styled.div`
  font-size: 22px;
  line-height: 28px;
  font-weight: semi-bold;
  ${headingMixin};
`;

const H5 = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: semi-bold;
  ${headingMixin};
`;

const H6 = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: semi-bold;
  ${headingMixin};
`;

export { H1, H2, H3, H4, H5, H6 };
