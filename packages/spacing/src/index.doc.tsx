import * as React from 'react';
import styled from 'styled-components';
import Heading from '@lendi-ui/heading';
import { Spacing, m, p, mx, my, ml, mb, mr, mt, pl, pb, pr, pt, py, px, SpacingNameOrNameMap } from '.';

export const keys = Object.keys as <T>(o: T) => (Extract<keyof T, string>)[];

interface ExampleComponentProps {
  size: SpacingNameOrNameMap;
}

const createMarginComponent = (fn: (props: ExampleComponentProps) => any) => {
  const Outer = styled.span`
    ${m('xs')} display: inline-block;
    outline: 1px dotted tomato;
  `;

  const Inner = styled.code`
    ${p('xs')} ${fn}
    display: inline-block;
    background-color: grey;
  `;

  return ({ size }: ExampleComponentProps) => (
    <Outer>
      <Inner size={size}>{JSON.stringify(size, null, 2)}</Inner>
    </Outer>
  );
};

const createPaddingComponent = (fn: (props: ExampleComponentProps) => any) => {
  const Outer = styled.span`
    ${m('xs')} ${fn}
    display: inline-block;
    background-color: tomato;
  `;

  const Inner = styled.code`
    ${p('xs')} display: inline-block;
    background-color: grey;
  `;

  return ({ size }: ExampleComponentProps) => (
    <Outer size={size}>
      <Inner>{JSON.stringify(size, null, 2)}</Inner>
    </Outer>
  );
};

const M = createMarginComponent(({ size }) => m(size));
const MX = createMarginComponent(({ size }) => mx(size));
const MY = createMarginComponent(({ size }) => my(size));
const MT = createMarginComponent(({ size }) => mt(size));
const MR = createMarginComponent(({ size }) => mr(size));
const MB = createMarginComponent(({ size }) => mb(size));
const ML = createMarginComponent(({ size }) => ml(size));

const P = createPaddingComponent(({ size }) => p(size));
const PX = createPaddingComponent(({ size }) => px(size));
const PY = createPaddingComponent(({ size }) => py(size));
const PT = createPaddingComponent(({ size }) => pt(size));
const PR = createPaddingComponent(({ size }) => pr(size));
const PB = createPaddingComponent(({ size }) => pb(size));
const PL = createPaddingComponent(({ size }) => pl(size));

export default () => (
  <>
    <Heading size="md">Margin</Heading>
    {keys(Spacing).map((name) => (
      <M size={name} />
    ))}
    <M size={{ mobile: 'xxs', tablet: 'md', desktop: 'xxl' }} />
    <hr />
    <MX size="md" />
    <MY size="md" />
    <MT size="md" />
    <MR size="md" />
    <MB size="md" />
    <ML size="md" />

    <Heading size="md">Padding</Heading>
    {keys(Spacing).map((name) => (
      <P size={name} />
    ))}
    <P size={{ mobile: 'xxs', tablet: 'md', desktop: 'xxl' }} />
    <hr />
    <PX size="md" />
    <PY size="md" />
    <PT size="md" />
    <PR size="md" />
    <PB size="md" />
    <PL size="md" />
  </>
);
