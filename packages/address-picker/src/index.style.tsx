import styled from 'styled-components';
import { Info } from '@lendi-ui/icon';
import { container } from '@lendi-ui/container';
import { pt } from '@lendi-ui/spacing';

export const Wrapper = styled.section`
  ${container()}
  max-width: 385px;
`;

export const Alert = styled.div`
  ${pt('sm')}
`;

export const InfoWrapper = styled(Info)`
  display: inline;
`;
