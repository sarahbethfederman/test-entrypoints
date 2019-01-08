import * as React from 'react';
import { Wrapper, SubLinks, LinkWrapper, PageLink, MainCategoryText, MainCategory } from './index.style';
import { MAIN_PAGES } from '../../constants';

export const MainPages = () => (
  <Wrapper>
    {MAIN_PAGES.map((link) => {
      return (
        <MainCategory key={link.category}>
          <MainCategoryText href={`https://lendi.com.au${link.categoryURL}`}>{link.category}</MainCategoryText>
          <SubLinks>
            {link.pageList.map((subpage) => (
              <LinkWrapper key={subpage.label}>
                <PageLink href={`https://www.lendi.com.au${subpage.url}`}>{subpage.label}</PageLink>
              </LinkWrapper>
            ))}
          </SubLinks>
        </MainCategory>
      );
    })}
  </Wrapper>
);
