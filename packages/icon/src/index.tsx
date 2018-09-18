import * as React from 'react';
import styled from 'styled-components';
import { color, NameOrNameMap } from '@lendi-ui/color';
import { Icons, IconMap } from './icons-compiled/index';

export interface IconProps {
  name: keyof IconMap;
  color: NameOrNameMap;
}

const IconWrapper = styled.span`
  & > svg {
    fill: ${({ fill }: { fill: NameOrNameMap }) => color(fill)};
  }
`;

const Icon: React.SFC<IconProps> = ({ name, color }) => {
  const Svg: React.SFC = Icons[name];

  return (
    <IconWrapper fill={color}>
      <Svg />
    </IconWrapper>
  );
};

export default Icon;
