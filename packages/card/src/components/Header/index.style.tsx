import styled from 'styled-components';
import { pb } from '@lendi-ui/spacing';
import { heading, HeadingSize } from '@lendi-ui/typography';

export const CardHeaderWrapper = styled.div`
  ${pb('xxs')}
  ${({ size = 'xs' }: { size?: HeadingSize }) => heading({ size })}
`;
