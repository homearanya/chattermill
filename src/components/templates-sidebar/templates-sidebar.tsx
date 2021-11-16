import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  CategoryHeading,
  CategoryList,
  CategoryListItem,
} from "./templates-sidebar.styled"

interface TemplatesSidebarProps {
  selectCategory: (category: string) => void
}

const TemplatesSidebar = ({ selectCategory }: TemplatesSidebarProps) => {
  const {
    allContentfulTemplateCategory: { edges },
  } = useStaticQuery<GatsbyTypes.TemplatesSidebarQuery>(graphql`
    query TemplatesSidebar {
      allContentfulTemplateCategory {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
  return (
    <>
      <CategoryHeading>Categories</CategoryHeading>
      <CategoryList>
        <CategoryListItem onClick={() => selectCategory("")}>
          All
        </CategoryListItem>
        {edges.map(({ node: { id, title } }) => (
          <CategoryListItem key={title} onClick={() => selectCategory(title)}>
            {title}
          </CategoryListItem>
        ))}
      </CategoryList>
    </>
  )
}

export default TemplatesSidebar
