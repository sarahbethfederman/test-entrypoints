import * as React from 'react';
import { Wrapper, SubLinks, LinkWrapper, PageLink, MainCategoryText, MainCategory } from './index.style';
import { MAIN_PAGES } from '../../constants';
import { WindowPosition } from '@lendi/lendi-analytics-package';
import { AnalyticsContext } from '@lendi-ui/utils';

export interface MainPagesProps {
  params?: string;
}

export class MainPages extends React.Component<MainPagesProps> {
  static contextType: any = AnalyticsContext;
  render() {
    const { params = '' } = this.props;
    return (
      <Wrapper>
        {MAIN_PAGES.map((link) => {
          return (
            <MainCategory key={link.category}>
              <MainCategoryText
                href={`https://lendi.com.au${link.categoryURL}${params}`}
                onClick={() => this.context.analyticsForNavigation(link.category, WindowPosition.footer)}
              >
                {link.category}
              </MainCategoryText>
              <SubLinks>
                {link.pageList.map((subpage) => (
                  <LinkWrapper key={subpage.label}>
                    <PageLink
                      href={`https://www.lendi.com.au${subpage.url}${params}`}
                      onClick={() => this.context.analyticsForNavigation(subpage.label, WindowPosition.footer)}
                    >
                      {subpage.label}
                    </PageLink>
                  </LinkWrapper>
                ))}
              </SubLinks>
            </MainCategory>
          );
        })}
      </Wrapper>
    );
  }
}
