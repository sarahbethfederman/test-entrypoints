import styled from 'styled-components';
import { pl, pr } from '@lendi-ui/spacing';

export const TriggerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  ${pl('sm')};
  ${pr('sm')};
  line-height: 1em;
`;
