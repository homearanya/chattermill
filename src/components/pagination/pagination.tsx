import React from "react";

import {
  Wrapper,
  PreviousLink,
  NextLink,
  PageIndicator
} from "./pagination.styled";

export interface PaginationData {
  tag?: string;
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
}

interface PaginationProps {
  readonly context: PaginationData;
}

const Pagination = ({ context }: PaginationProps) => {
  const { numPages, currentPage, tag } = context;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const isNotPaginated = isFirst && isLast;

  const prevPageNum = currentPage - 1 === 1 ? `` : currentPage - 1;
  const nextPageNum = currentPage + 1;

  const pathPrefix =
    typeof tag === "string"
      ? `/resources/insights/tags/${tag}/page`
      : "/resources/insights/page";
  const prevPageLink = isFirst
    ? null
    : `${
        currentPage === 2
          ? typeof tag === "string"
            ? `/resources/insights/tags/${tag}/`
            : "/resources/insights/"
          : `${pathPrefix}/${prevPageNum}/`
      }`;
  const nextPageLink = isLast ? null : `${pathPrefix}/${nextPageNum}/`;

  return (
    <Wrapper>
      {!isFirst && prevPageLink && (
        <PreviousLink to={prevPageLink}>&#8592; Prev Page</PreviousLink>
      )}
      {!isNotPaginated && (
        <PageIndicator>
          {currentPage}/{numPages}
        </PageIndicator>
      )}
      {!isLast && nextPageLink && (
        <NextLink to={nextPageLink}>Next Page &#8594;</NextLink>
      )}
    </Wrapper>
  );
};

export default Pagination;
