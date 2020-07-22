import { css } from 'styled-components';
import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { gutter as defaultGutter } from './tokens';
import { SpacingName, Spacing } from '@lendi-ui/spacing';

export type Wrap = boolean;
export type Reverse = boolean;
export type HAlign = 'left' | 'right' | 'center' | 'justify-center' | 'justify';
export type VAlign = 'top' | 'bottom' | 'center' | 'stretch';
export type Gutter = string | SpacingName;

export interface GridOptions {
  wrap?: BreakpointValue<Wrap> | BreakpointValueMap<Wrap>;
  halign?: BreakpointValue<HAlign> | BreakpointValueMap<HAlign>;
  valign?: BreakpointValue<VAlign> | BreakpointValueMap<VAlign>;
  reverse?: BreakpointValue<Reverse> | BreakpointValueMap<Reverse>;
  gutter?: BreakpointValue<Gutter> | BreakpointValueMap<Gutter>;
}

function halignMixin({
  halign,
  reverse,
}: {
  halign?: BreakpointValue<HAlign> | BreakpointValueMap<HAlign>;
  reverse?: BreakpointValue<Reverse> | BreakpointValueMap<Reverse>;
}) {
  // if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (halign === undefined) {
    return '';
  }
  return map(halign, (value = 'left') => {
    let rule = '';
    switch (value) {
      case 'left':
        if (reverse) {
          rule = 'flex-end';
        } else {
          rule = 'flex-start';
        }
        break;

      case 'right':
        if (reverse) {
          rule = 'flex-start';
        } else {
          rule = 'flex-end';
        }
        break;

      case 'center':
        rule = 'center';
        break;

      case 'justify-center':
        rule = 'space-around';
        break;

      case 'justify':
        rule = 'space-between';
        break;

      default:
        throw new Error(
          `styled-components-grid: halign must be one of "left", "right", "center", "justify-center" or "justify". Got "${String(
            value
          )}"`
        );
    }
    return `justify-content: ${rule};`;
  });
}

function valignMixin({ valign }: { valign?: BreakpointValue<VAlign> | BreakpointValueMap<VAlign> }) {
  // if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (valign === undefined) {
    return '';
  }
  return map(valign, (value = 'stretch') => {
    let rule = '';
    switch (value) {
      case 'top':
        rule = 'flex-start';
        break;

      case 'bottom':
        rule = 'flex-end';
        break;

      case 'center':
        rule = 'center';
        break;

      case 'stretch':
        rule = 'stretch';
        break;

      default:
        throw new Error(
          `styled-components-grid: valign must be one of "top", "bottom", "center" or "stretch". Got "${String(
            value
          )}".`
        );
    }
    return `align-items: ${rule};`;
  });
}

function reverseMixin({ reverse }: { reverse?: BreakpointValue<Reverse> | BreakpointValueMap<Reverse> }) {
  // if no value is specified, then don't output any css (it just makes it harder for the consumer to override)
  if (reverse === undefined) {
    return '';
  }
  return map(reverse, (value = false) => `flex-direction: ${(value && 'row-reverse') || 'row'};`);
}

function wrapMixin({
  wrap,
  reverse,
}: {
  wrap?: BreakpointValue<Wrap> | BreakpointValueMap<Wrap>;
  reverse?: BreakpointValue<Reverse> | BreakpointValueMap<Reverse>;
}) {
  if (wrap === undefined) {
    return 'flex-wrap: wrap;';
  }
  return map(wrap, (value = true) => {
    if (value && reverse) {
      return 'flex-wrap: wrap-reverse;';
    } else if (value === false) {
      return 'flex-wrap: nowrap;';
    } else {
      return 'flex-wrap: wrap;';
    }
  });
}

function isSpacingName(gutter: Gutter | undefined): gutter is SpacingName {
  return Spacing[gutter as SpacingName] !== undefined;
}

function gutterMixin({ gutter = defaultGutter }: { gutter?: BreakpointValue<Gutter> | BreakpointValueMap<Gutter> }) {
  return map(gutter, (value) => {
    if (value === undefined) return;
    const val = isSpacingName(value) ? Spacing[value] : value;
    return `
        margin-left: calc(${val} / 2 * -1);
        margin-right: calc(${val} / 2 * -1);

        & > * {
          padding-left: calc(${val} / 2);
          padding-right: calc(${val} / 2);
        }
      `;
  });
}

export function grid(props: GridOptions = {}) {
  return css`
    display: flex;
    ${halignMixin(props)};
    ${valignMixin(props)};
    ${reverseMixin(props)};
    ${wrapMixin(props)};
    ${gutterMixin(props)};
  `;
}
