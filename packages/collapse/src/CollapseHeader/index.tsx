import * as React from 'react';

import { CollapseHeader, TitleContainer, CollapseTitle, CollapseHeadSubTitle, ChevronIcon, Size } from '../index.style';
import { ExpandLess, ExpandMore } from '@lendi-ui/icon';

export interface CollapseHeaderSectionProps {
  title: string;
  subTitle: string;
  isOpen: boolean;
  headerSize: Size;
}

const CollapseHeaderSection: React.FunctionComponent<CollapseHeaderSectionProps> = (
  props: CollapseHeaderSectionProps
) => (
  <CollapseHeader size={props.headerSize}>
    <TitleContainer>
      <CollapseTitle>{props.title}</CollapseTitle>
      {props.subTitle && <CollapseHeadSubTitle>{props.subTitle}</CollapseHeadSubTitle>}
    </TitleContainer>
    <ChevronIcon>
      {props.isOpen ? <ExpandLess color="secondary.500" /> : <ExpandMore color="secondary.500" />}
    </ChevronIcon>
  </CollapseHeader>
);

export default CollapseHeaderSection;
