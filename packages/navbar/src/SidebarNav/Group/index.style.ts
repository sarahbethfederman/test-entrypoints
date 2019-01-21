import styled from 'styled-components';
import { ml, pt, pb } from '@lendi-ui/spacing';
import { Button } from '../Item/index.style';

export const Wrapper = styled.div``;

export interface ToggleProps {
  isExpanded: boolean;
}

export const MenuToggle = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    ${ml('xxs')} ${({ isExpanded }: ToggleProps) => isExpanded && `transform: rotate(-180deg);`};
  }
`;

export interface MenuProps {
  isExpanded: boolean;
}

// TODO: use height auto in transition - requires JS
// TODO: fix accessibility - e.g. menu children shouldn't tabbable when hidden
export const MenuContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s;
  ${({ isExpanded }: MenuProps) => isExpanded && `max-height: 20em;`};

  > :first-child {
    ${pt('xxxs')};
  }

  > :last-child {
    ${pb('xxxs')};
  }
`;
