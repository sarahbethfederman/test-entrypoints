import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Theme from '@auscred/theme';
import { BreakpointValue, BreakpointValueMap } from '@auscred/breakpoint';
import { m, p, mx, my, ml, mb, mr, mt, pl, pb, pr, pt, py, px } from '.';

interface ExampleComponentProps {
  size: BreakpointValue<number> | BreakpointValueMap<number>;
}

const createMarginComponent = (fn: (props: ExampleComponentProps) => any) => {
  const Outer = styled.span`
    ${m(2)} display: inline-block;
    outline: 1px dotted tomato;
  `;

  const Inner = styled.code`
    ${p(2)} ${fn}
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
    ${m(2)} ${fn}
    display: inline-block;
    background-color: tomato;
  `;

  const Inner = styled.code`
    ${p(2)} display: inline-block;
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

storiesOf('Foundation/spacing', module)
  .addWithJSX('margin', () => (
    <Theme>
      <>
        <M size={0} />
        <M size={1} />
        <M size={2} />
        <M size={3} />
        <M size={4} />
        <M size={5} />
        <M size={6} />
        <M size={{ mobile: 2, tablet: 4, desktop: 6 }} />
        <hr />
        <MX size={3} />
        <MY size={3} />
        <MT size={3} />
        <MR size={3} />
        <MB size={3} />
        <ML size={3} />
      </>
    </Theme>
  ))
  .addWithJSX('padding', () => (
    <Theme>
      <>
        <P size={0} />
        <P size={1} />
        <P size={2} />
        <P size={3} />
        <P size={4} />
        <P size={5} />
        <P size={6} />
        <P size={{ mobile: 2, tablet: 4, desktop: 6 }} />
        <hr />
        <PX size={3} />
        <PY size={3} />
        <PT size={3} />
        <PR size={3} />
        <PB size={3} />
        <PL size={3} />
      </>
    </Theme>
  ));
