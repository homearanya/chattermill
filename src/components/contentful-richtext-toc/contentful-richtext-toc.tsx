import React from "react"
import { BLOCKS, Document } from "@contentful/rich-text-types"
import slugify from "slugify"

import { Wrapper } from "./contentful-richtext-toc.styled"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "react-scroll"

interface TableOfContentsProps {
  body: {
    raw: string
  }
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const TableOfContents = ({ body, setOpen }: TableOfContentsProps) => {
  // the body is the json object returned by the rich text field
  const headingTypes = [BLOCKS.HEADING_2, BLOCKS.HEADING_3]

  const headings = JSON.parse(body.raw).content.filter((item) =>
    headingTypes.includes(item.nodeType)
  )

  const document: Document = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: headings,
  }

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <li
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              listStyleType: "disc",
            }}
          >
            <Link
              to={slugify(children[0])}
              smooth={true}
              duration={300}
              offset={-50}
              onClick={() => setOpen && setOpen(false)}
            >
              {children}
            </Link>
          </li>
        )
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <li
            style={{
              marginLeft: `16px`,
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
          >
            <Link
              to={slugify(children[0])}
              smooth={true}
              duration={300}
              offset={-50}
              onClick={() => setOpen && setOpen(false)}
            >
              {children}
            </Link>
          </li>
        )
      },
    },
  }

  return (
    <Wrapper>
      <h2 style={{ fontSize: "2rem" }}>Table of contents</h2>
      <ul style={{ paddingLeft: "3rem" }}>
        {documentToReactComponents(document, options)}
      </ul>
    </Wrapper>
  )
}

export default TableOfContents
