import styled from 'styled-components';
import { grid, unit } from '@lendi-ui/grid';
import { normalise } from '@lendi-ui/utils';

export const Wrapper = styled.div`
  ${normalise};
  ${grid()};
`;

export const FeatureItemWrapper = styled.div`
  ${unit({ size: { mobile: 1 / 1, tablet: 1 / 2, desktop: 1 / 4 } })};
`;
