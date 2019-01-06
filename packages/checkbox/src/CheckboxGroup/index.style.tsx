import styled from 'styled-components';

export type Direction = 'row' | 'column';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }: { direction: Direction }) => direction};
`;
