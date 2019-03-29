import styled from 'styled-components';
export * from './grid';
export * from './unit';
import { grid } from './grid';
import { unit } from './unit';

const Unit = styled.div`
  ${unit};
`;

const Grid = styled.div`
  ${grid};
`;

(Grid as typeof Grid & { Unit: typeof Unit }).Unit = Unit;

export default Grid as typeof Grid & { Unit: typeof Unit };
