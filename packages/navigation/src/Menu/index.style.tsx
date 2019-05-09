import styled from 'styled-components';
import { py, pl, pr, my } from '@lendi-ui/spacing';
import { bg } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';
import { ChevronUp, ChevronDown } from '@lendi-ui/icon';
import { deriveSize } from '@lendi-ui/utils';
import { select } from '@lendi-ui/theme';

export const MenuWrapper = styled.div`
    width: 100%;
    display; flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: ${select('borderRadius')};
    ${depth(1)} ${my('xs')}
`;

export const HeadWrapper = styled.button`
    appearance: none;
    border: none;
    width: 100%;
    background: inherit;
    cursor: pointer;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    ${pl('xxs')} ${pr('xs')} ${py('xs')}
    ${bg('secondary.500')}
    ${({ isOpen }: { isOpen: boolean }) =>
      isOpen
        ? `border-radius: ${select('borderRadius')} ${select('borderRadius')} 0 0;`
        : `border-radius: ${select('borderRadius')};`}
`;

export const MainWrapper = styled.div`
  border-radius: 0 0 ${select('borderRadius')} ${select('borderRadius')};
  ${bg('shade.0')} ${py('xxxs')};
`;

export const MenuChevronUp = styled(ChevronUp)`
  width: ${deriveSize(1.5)};
  height: ${deriveSize(1.5)};
`;

export const MenuChevronDown = styled(ChevronDown)`
  width: ${deriveSize(1.5)};
  height: ${deriveSize(1.5)};
`;
