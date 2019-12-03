import styled from 'styled-components';
import { normalise } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';

export const Wrapper = styled.div`
  ${normalise};
  min-width: 45px;
  min-height: 45px;
  line-height: 45px;
  position: relative;
  display: inline-block;
  font-family: ${select('typography.body.fontFamily')};
`;
