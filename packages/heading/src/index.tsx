// @ts-ignore
import * as React from 'react';
import styled from 'styled-components';
import { heading, HeadingOptions } from '@lendi-ui/typography';

const H1 = styled.h1`
  ${(props: HeadingOptions) => heading({ ...props, size: 1 })};
`;

const H2 = styled.div`
  ${(props: HeadingOptions) => heading({ ...props, size: 2 })};
`;

const H3 = styled.div`
  ${(props: HeadingOptions) => heading({ ...props, size: 3 })};
`;

const H4 = styled.div`
  ${(props: HeadingOptions) => heading({ ...props, size: 4 })};
`;

const H5 = styled.div`
  ${(props: HeadingOptions) => heading({ ...props, size: 5 })};
`;

const H6 = styled.div`
  ${(props: HeadingOptions) => heading({ ...props, size: 6 })};
`;

export { H1, H2, H3, H4, H5, H6 };
