import styled from 'styled-components';
import { mb } from '@lendi-ui/spacing';
import { Question } from '@lendi-ui/icon'; // replace with ToolTip later when LUI Input added to LUI
import { LabelSize } from './Label/index.style';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const LabelField = styled.label`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  ${mb('xxxs')};
`;

// we calculate padding-top with formular padding_top=(line_height - font_size)/2. line_height and font_size may depends on LUI Body and Heading.
const PaddingTopByLabelSize = (size: LabelSize) => {
  let lineHeight, fontSize;
  switch (size) {
    case 'sm':
      fontSize = 1;
      lineHeight = 3 / 2;
      break;
    case 'lg':
      fontSize = 1.75;
      lineHeight = 8 / 7;
      break;
    default:
      fontSize = 1;
      lineHeight = 3 / 2;
      break;
  }
  return (lineHeight - fontSize) / 2;
};

export const ToolTip = styled(Question)`
  padding-top: calc(${({ size }: { size: LabelSize }) => PaddingTopByLabelSize(size)} * var(--lendi-ui-size));
`;
