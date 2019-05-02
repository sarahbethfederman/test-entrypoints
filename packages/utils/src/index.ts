import { map, BreakpointValue, BreakpointValueMap } from '@lendi-ui/breakpoint';

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
export const getDataProps = (props: ComponentProps) => {
  const dataProps: DataObject = {};
  for (const key in props) {
    if (key.startsWith('data-')) {
      dataProps[key] = props[key];
    }
  }

  return dataProps;
};
