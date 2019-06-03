import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';
import { css } from 'styled-components';

export type DisplyValue = BreakpointValue<string> | BreakpointValueMap<string>;
export const display = (val: DisplyValue) => map(val, (v) => v && `display: ${v};`);

/**
 * Derive size from root CSS variable
 * @param multiplier
 */
export const deriveSize = (multiplier: number) => {
  if (multiplier === 1) {
    return `var(--lendi-ui-size)`;
  }

  return `calc(${multiplier} * var(--lendi-ui-size))`;
};

export const normalise = css`
  box-sizing: border-box;
  line-height: 1.333;
  white-space: normal;
  border-spacing: 2px;
  text-align: left;
  word-spacing: normal;
  letter-spacing: normal;
`;
interface ComponentProps {
  [key: string]: any;
}

interface DataObject {
  [key: string]: string;
}

/**
 * return all the props of an object where the key begins with 'data-'
 * @param props The props object of a given component
 */
export const getDataProps = (props: ComponentProps): DataObject => {
  const dataProps: DataObject = {};
  for (const key in props) {
    if (key.startsWith('data-')) {
      dataProps[key] = props[key];
    }
  }

  return dataProps;
};

export * from './AnalyticsUtility/AnalyticsContext';
export * from './AnalyticsUtility/AnalyticsService';
export * from './LUIWhiteListProps';
