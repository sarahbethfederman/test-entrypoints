import styled from 'styled-components';
export * from './grid';
export * from './unit';
import { grid, GridOptions } from './grid';
import { unit, UnitOptions } from './unit';

const Unit = styled.div<UnitOptions>`
  ${unit};
`;

const Grid = styled.div<GridOptions>`
  ${grid};
`;

(Grid as typeof Grid & { Unit: typeof Unit }).Unit = Unit;

export default Grid as typeof Grid & { Unit: typeof Unit };
