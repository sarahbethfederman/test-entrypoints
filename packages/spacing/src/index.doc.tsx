import * as React from 'react';
import styled from 'styled-components';
import { PropTable } from '@lendi-ui/doc-utils';

import { Heading } from '@lendi-ui/typography';
import { Spacing, m, p, mx, my, ml, mb, mr, mt, pl, pb, pr, pt, py, px, SpacingNameOrSpacingNameMap } from '.';

export const keys = Object.keys as <T>(o: T) => Extract<keyof T, string>[];

interface ExampleComponentProps {
  size: SpacingNameOrSpacingNameMap;
  functionName?: string;
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

  return ({ size, functionName }: ExampleComponentProps) => (
    <Outer>
      <Inner size={size}>
        {functionName}({JSON.stringify(size, null, 2)})
      </Inner>
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

  return ({ size, functionName }: ExampleComponentProps) => (
    <Outer size={size}>
      <Inner>
        {functionName}({JSON.stringify(size, null, 2)})
      </Inner>
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
    <Heading size="lg">Margin</Heading>
    {keys(Spacing).map((name) => (
      <M size={name} functionName="m" />
    ))}
    <M size={{ mobile: 'xxs', tablet: 'md', desktop: 'xxl' }} functionName="m" />
    <hr />
    <MX size="md" functionName="mx" />
    <MY size="md" functionName="my" />
    <MT size="md" functionName="mt" />
    <MR size="md" functionName="mr" />
    <MB size="md" functionName="mb" />
    <ML size="md" functionName="ml" />
    <br />

    <Heading size="lg">Padding</Heading>
    {keys(Spacing).map((name) => (
      <P size={name} functionName="p" />
    ))}
    <P size={{ mobile: 'xxs', tablet: 'md', desktop: 'xxl' }} functionName="p" />
    <hr />
    <PX size="md" functionName="px" />
    <PY size="md" functionName="py" />
    <PT size="md" functionName="pt" />
    <PR size="md" functionName="pr" />
    <PB size="md" functionName="pb" />
    <PL size="md" functionName="pl" />
  </>
);
