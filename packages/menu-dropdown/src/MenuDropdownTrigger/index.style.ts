import styled from 'styled-components';
import { pl, pr } from '@lendi-ui/spacing';
import { fg, bg } from '@lendi-ui/color';

export const TriggerWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  :hover {
    ${fg('shade.0')};
    ${bg('secondary.500')};
  }
`;

export const IconWrapper = styled.div`
  ${pl('sm')};
  ${pr('sm')};
  line-height: 1em;
`;
