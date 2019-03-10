import styled from 'styled-components';
import { my } from '@lendi-ui/spacing';

export const Legend = styled.legend`
  ${my('xs')};
`;

export type Direction = 'row' | 'column';

export const Fieldset = styled.fieldset`
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }: { direction: Direction }) => direction};
`;
