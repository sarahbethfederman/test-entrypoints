import * as React from 'react';

import styled, { css } from 'styled-components';
import { color, bg } from '@lendi-ui/color';
import { select } from '@lendi-ui/theme';
import { pl, mr, my } from '@lendi-ui/spacing';
import { ArrowDropDown } from '@lendi-ui/icon';

export const ITEM_HEIGHT = '40px';

interface RightArrowProps {
  shouldRotate: boolean;
}

interface AccordionProps {
  isVisible: boolean;
  children: React.ReactNode;
}

export const ItemsWrapper = styled.ul`
  ${my('nil')};
  ${pl('nil')};
  list-style: none;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Item = styled.button`
  :last-child {
    border-bottom: 1px solid ${color('shade.100')};
  }

  background-color: inherit;
  border: none;
  text-align: left;
  cursor: pointer;

  border-top: 1px solid ${color('shade.100')};
  font-family: ${select('typography.body.fontFamily')};
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  color: ${color('secondary.500')};
  width: 100%;
  height: ${ITEM_HEIGHT};
  line-height: ${ITEM_HEIGHT};
  ${pl('sm')};

  :hover {
    ${bg('shade.25')};
  }
`;

export const RightArrow = styled(ArrowDropDown).attrs({
  color: 'secondary.500',
})`
  line-height: 0;
  ${mr('sm')};
  transform: rotate(-90deg);
  height: 18px;
  width: 18px;
  transition: transform 0.5s;

  ${({ shouldRotate }: RightArrowProps) =>
    css`
      transform: rotate(${shouldRotate ? '0deg' : '-90deg'});
    `}
`;

export const Accordion = styled.ul`
  ${pl('nil')};
  list-style: none;
  height: 0px;
  width: 100%;
  transition: height 0.3s linear;
  overflow: hidden;

  ${({ isVisible, children }: AccordionProps) =>
    isVisible &&
    css`
      height: calc(${React.Children.count(children)} * ${ITEM_HEIGHT});
    `}
`;

export const SubItem = styled.li`
  font-family: ${select('typography.body.fontFamily')};
  font-size: 12px;
  width: 100%;
  ${pl('nil')};
  height: ${ITEM_HEIGHT};
  transition: height 1s ease-out;
  line-height: ${ITEM_HEIGHT};
  background-color: ${color('shade.25')};
`;

export const ItemLink = styled.a`
  text-decoration: none;
  color: ${color('secondary.500')};
  width: 100%;
`;

export const SubItemLink = styled.a`
  text-decoration: none;
  color: ${color('shade.900')};
  display: block;
  padding-left: 48px;
`;
