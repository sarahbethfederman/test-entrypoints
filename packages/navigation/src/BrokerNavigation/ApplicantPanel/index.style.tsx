import styled from 'styled-components';
import { Link, Overline } from '@lendi-ui/typography';
import { CheckCircleOutline, ErrorOutline } from '@lendi-ui/icon';
import { py, pb, mr, ml, my } from '@lendi-ui/spacing';
import { color } from '@lendi-ui/color';

export const PanelWrapper = styled.div`
  background: inherit;
  ${py('xs')};
`;

export const ApplicantOverline = styled(Overline)`
   ${pb('xxs')}
  border-bottom: 1px solid ${color('shade.100')};
`;

export const ApplicantLink = styled(Link)`
  display: block;
  background: inherit;
  text-decoration : none;
    :hover, :focus, :active {
        text-decoration : none;
    }
  ${mr('xs')} ${my('xxs')} ${ml('sm')}
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const SuccessIcon = styled(CheckCircleOutline)`
  line-height: 0;
`;

export const WarnIcon = styled(ErrorOutline)`
  line-height: 0;
`;

export const Circle = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid ${color('secondary.500')};
  :after {
    content: '';
    display: table;
    width: 6px;
    height: 6px;
    background: ${color('secondary.500')};
    border-radius: 50%;
  }
`;
