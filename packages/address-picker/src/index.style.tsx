import styled from 'styled-components';
import { Info } from '@lendi-ui/icon';
import { pt } from '@lendi-ui/spacing';

export const Wrapper = styled.section`
  width: 100%;
`;

export const Alert = styled.div`
  ${pt('sm')}
`;

export const InfoWrapper = styled(Info)`
  display: inline;
`;
