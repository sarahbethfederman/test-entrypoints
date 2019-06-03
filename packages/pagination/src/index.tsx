import * as React from 'react';
import { Wrapper, ChevronLeftIcon, ChevronRightIcon, ButtonWrapper, IconButtonWrapper } from './index.style';
import { LUIGlobalProps } from '@lendi-ui/utils';
export interface PaginationProps extends LUIGlobalProps {
  currentPage?: number;
  totalPages: number;
  visiblePages?: number;
  handleChange: (nextPage: number) => void;
  handleClick: (pageLabel: number) => void;
}

const pageRange = (totalPages: number, visiblePages: number, currentPage: number) => {
  let pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages = pages.concat(i);
  }
  if (totalPages <= visiblePages) {
    return pages;
  } else {
    if (visiblePages % 2 === 0) {
      if (currentPage <= visiblePages / 2 + 1) {
        return pages.filter((page) => page <= visiblePages);
      } else if (currentPage >= totalPages - visiblePages / 2 + 1) {
        return pages.filter((page) => page >= totalPages - visiblePages + 1);
      } else {
        return pages.filter(
          (page) => page >= currentPage - visiblePages / 2 + 1 && page <= currentPage + visiblePages / 2
        );
      }
    } else {
      if (currentPage <= visiblePages / 2 + 1) {
        return pages.filter((page) => page <= visiblePages);
      } else if (currentPage >= totalPages - visiblePages / 2) {
        return pages.filter((page) => page >= totalPages - visiblePages + 1);
      } else {
        return pages.filter((page) => page >= currentPage - visiblePages / 2 && page <= currentPage + visiblePages / 2);
      }
    }
  }
};

const Pagination = ({
  totalPages,
  visiblePages = 7,
  currentPage = 1,
  handleChange,
  handleClick,
  ...otherProps
}: PaginationProps) => {
  const MAX_PAGE = totalPages;
  const MIN_PAGE = 1;
  if (currentPage > MAX_PAGE) {
    console.warn('Warning: The value of currentPage MUST be less than the value of totalPages!');
    currentPage = MAX_PAGE;
  } else if (currentPage < MIN_PAGE) {
    console.warn('Warning: The value of currentPage MUST be greater than 1!');
    currentPage = MIN_PAGE;
  }
  return (
    <Wrapper {...otherProps}>
      <IconButtonWrapper
        variant="secondary"
        isDisabled={currentPage === 1}
        ariaLabel="chevronLeft"
        onClick={() => handleChange(currentPage - 1)}
      >
        <ChevronLeftIcon color="primary.500" />
      </IconButtonWrapper>
      {pageRange(totalPages, visiblePages, currentPage).map((page) => (
        <ButtonWrapper
          key={page}
          variant={page === currentPage ? 'primary' : 'secondary'}
          onClick={() => handleClick(page)}
        >
          {page}
        </ButtonWrapper>
      ))}
      <IconButtonWrapper
        variant="secondary"
        isDisabled={currentPage === totalPages}
        ariaLabel="chevronRight"
        onClick={() => handleChange(currentPage + 1)}
      >
        <ChevronRightIcon color="primary.500" />
      </IconButtonWrapper>
    </Wrapper>
  );
};

export default Pagination;
