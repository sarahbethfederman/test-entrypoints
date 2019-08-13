import styled from 'styled-components';
import { normalise } from '@lendi-ui/utils';

interface CarouselContainerProps {
  width: string;
}

export const CarouselContainer = styled.div<CarouselContainerProps>`
  ${normalise};
  position: relative;
  width: ${({ width }) => width};
`;
