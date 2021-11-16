import React from "react"
import { Container } from "react-awesome-styled-grid"

import CatGrid1 from "../cat-grid-1"
import CatGrid2 from "../cat-grid-2"
import CatGrid3 from "../cat-grid-3"

import { StyledSection, StyledLink, Heading } from "./category-posts.styled"

const catGrids = {
  "1": CatGrid1,
  "2": CatGrid2,
  "3": CatGrid3,
}

interface CategoryPostsProps {
  readonly category: GatsbyTypes.FrontPostCat
  readonly pathPrefix: string
}

const CategoryPosts = ({ category, pathPrefix }: CategoryPostsProps) => {
  const { title, grid, posts } = category
  const CatGrid = catGrids[grid]
  return (
    <StyledSection>
      <Container>
        <>
          <StyledLink
            to={`${pathPrefix}category/${title}`}
            activeClassName="active"
          >
            <Heading>
              {title}
              <span>&#62;</span>
            </Heading>
          </StyledLink>
          <CatGrid posts={posts} pathPrefix={pathPrefix} />
        </>
      </Container>
    </StyledSection>
  )
}

export default CategoryPosts
