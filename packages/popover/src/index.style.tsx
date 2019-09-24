import styled from 'styled-components';
import { body } from '@lendi-ui/typography';
import { bg, fg, color } from '@lendi-ui/color';
import { p } from '@lendi-ui/spacing';
import { deriveSize, normalise } from '@lendi-ui/utils';

export type Position =
  | 'top'
  | 'top-end'
  | 'top-start'
  | 'bottom'
  | 'bottom-end'
  | 'bottom-start'
  | 'left'
  | 'left-end'
  | 'left-start'
  | 'right'
  | 'right-end'
  | 'right-start';

export const TooltipWrapper = styled.div`
  .tooltip-container {
    ${body};
    font-size: ${deriveSize(1)};
    margin: 5px 5px 0px 5px;
  }
`;

export const ContentWrapper = styled.div`
  ${normalise};
  ${bg('secondary.600')};
  ${fg('shade.0')};
  text-align: left;
  border-radius: 5px;

  ${({ isContentString }: { isContentString: boolean }) => {
    return isContentString ? p('sm') : undefined;
  }}
`;

export const ArrowWrapper = styled.div`
  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }

  .tooltip-arrow[data-placement*='bottom'] {
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent ${color('secondary.600')} transparent;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .tooltip-arrow[data-placement*='top'] {
    border-width: 5px 5px 0 5px;
    border-color: ${color('secondary.600')} transparent transparent transparent;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .tooltip-arrow[data-placement*='right'] {
    border-width: 5px 5px 5px 0;
    border-color: transparent ${color('secondary.600')} transparent transparent;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip-arrow[data-placement*='left'] {
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent ${color('secondary.600')};
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
`;
