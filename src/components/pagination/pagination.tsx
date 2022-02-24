import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import {
  Wrapper,
  PreviousLink,
  NextLink,
  ListOfPageNumbers,
  PageNumber,
} from "./pagination.styled"

interface PaginationProps {
  context: {
    category?: string
    tag?: string
    numPages: number
    currentPage: number
    arrayOfPageNumbers: number[]
  }
}

const Pagination = ({ context }: PaginationProps) => {
  const { numPages, currentPage, tag, category, arrayOfPageNumbers } = context
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const isNotPaginated = isFirst && isLast

  const prevPageNum = currentPage - 1 === 1 ? `` : currentPage - 1
  const nextPageNum = currentPage + 1

  const tagsOrCategory = category ? "category" : "tags"

  const pathPrefix =
    typeof tag === "string"
      ? `/blog/${tagsOrCategory}/${kebabCase(tag)}/`
      : "/blog/"
  const prevPageLink = isFirst
    ? null
    : `${currentPage === 2 ? pathPrefix : `${pathPrefix}page/${prevPageNum}/`}`
  const nextPageLink = isLast ? null : `${pathPrefix}page/${nextPageNum}/`

  return (
    <Wrapper>
      {!isFirst && prevPageLink && (
        <PreviousLink to={prevPageLink}>&#8592; Prev Page</PreviousLink>
      )}
      {/* {!isNotPaginated && (
        <PageIndicator>
          {currentPage}/{numPages}
        </PageIndicator>
      )} */}
      {!isNotPaginated && (
        <ListOfPageNumbers>
          {arrayOfPageNumbers.map(e => (
            <PageNumber key={e} active={e === currentPage}>
              <Link to={`${pathPrefix}${e === 1 ? "" : `page/${e}`}`}>{e}</Link>
            </PageNumber>
          ))}
        </ListOfPageNumbers>
      )}
      {!isLast && nextPageLink && (
        <NextLink to={nextPageLink}>Next Page &#8594;</NextLink>
      )}
    </Wrapper>
  )
}

export default Pagination
