import styled from 'styled-components';
import Popover from 'react-tiny-popover';
import { bg, fg } from '@lendi-ui/color';
import { p } from '@lendi-ui/spacing';
import { deriveSize } from '@lendi-ui/utils';

export type Position = 'left' | 'right' | 'top' | 'bottom';

export const PopoverWrapper = styled(Popover)``;

export const ContentWrapper = styled.div`
  ${bg('secondary.600')};
  ${fg('shade.0')};
  ${p('sm')};
  max-width: ${deriveSize(15)};
  text-align: left;
  border-radius: 5px;
`;
