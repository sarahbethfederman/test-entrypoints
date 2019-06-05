import styled from 'styled-components';
import Logo from '@lendi-ui/logo';
import Container from '@lendi-ui/container';
import { Maintenance, PageNotFound } from '@lendi-ui/fancy-icon';
import { Heading, Body } from '@lendi-ui/typography';
import { bg } from '@lendi-ui/color';
import { gte } from '@lendi-ui/breakpoint';
import { px, mt } from '@lendi-ui/spacing';

export const Wrapper = styled.div`
  ${bg('shade.25')} min-height: 100vh;
  height: 100%;
  width: 100%;
`;

export const ContainerWrapper = styled(Container)`
  ${bg('shade.25')} ${px('xl')};
  height: 94vh;
`;

export const LendiLogo = styled(Logo)`
  ${mt('xxs')} width: 5rem;
  height: 3.125rem;
  ${gte('tablet')`
  width: 6rem;
  height: 3.75rem;
    `};
`;

export const Main = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const MaintenanceIcon = styled(Maintenance)`
  & svg {
    width: 9rem;
    height: 9rem;
  }
  ${gte('tablet')`
    & svg {
      width: 18rem;
      height: 18rem;
    }
  `};
`;

export const PageNotFoundIcon = styled(PageNotFound)`
  width: inherit;
  height: inherit;

  & svg {
    width: 9rem;
    height: 9rem;
  }
  ${gte('tablet')`
    & svg {
      width: 18rem;
      height: 18rem;
    }
  `};
`;

export const HeadingWrapper = styled(Heading)`
  text-align: center;
  margin-bottom: 2rem;
`;

export const BodyWrapper = styled(Body)`
  text-align: center;
  max-width: 580px;
  margin-bottom: 2rem;
`;
