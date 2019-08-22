import styled from 'styled-components';
import { body } from '@lendi-ui/typography';
import { mb, ml, pr } from '@lendi-ui/spacing';
import { NativeSelect } from '@lendi-ui/dropdown';
import { between } from '@lendi-ui/breakpoint';
import Grid from '@lendi-ui/grid';
import { color, bg } from '@lendi-ui/color';
import { select } from '@lendi-ui/theme';

export const UnitWrapper = styled(Grid.Unit)`
  display: flex;
  flex-direction: column;
  ${mb('sm')};
  ${pr('sm')};
`;

export const Label = styled.label`
  ${body({ size: 'sm', color: 'shade.700' })}
  ${mb('xxxs')};
`;

export const StyledDropdown = styled(NativeSelect)`
  border-radius: ${select('borderRadius')};
  border: 1px solid ${color('shade.200')};
  ${ml('nil')};

  ${between('mobile', 'tablet')`
    flex-grow: 2;
    width: 100%;
  `};

  &:hover,
  &:focus {
    box-shadow: unset;
  }

  & > select {
    border-radius: ${select('borderRadius')};
    ${bg('shade.0')};
    height: 38px;
  }

  & > span {
    top: 9px;
  }
`;
