import React from "react"
import slugify from "slugify"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { Wrapper, StyledStrong } from "./richtext-contentful.styled"

import UniversalLink from "../universal-link"
import Table from "../table"

const Bold = ({ children }) => <StyledStrong>{children}</StyledStrong>
const Text = ({ children }) => (
  <p
    style={{
      padding: "1rem 0rem",
    }}
  >
    {children}
  </p>
)

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (_, children) => {
      if (
        !!children[0] &&
        !!children[0][1] &&
        typeof children[0][1] === "string"
      ) {
        return <h2 id={slugify(children[0][1])}>{children}</h2>
      } else {
        return <h2>{children}</h2>
      }
    },
    [BLOCKS.HEADING_3]: (_, children) => {
      if (
        !!children[0] &&
        !!children[0][1] &&
        typeof children[0][1] === "string"
      ) {
        return <h3 id={slugify(children[0][1])}>{children}</h3>
      } else {
        return <h3>{children}</h3>
      }
    },
    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
    [INLINES.HYPERLINK]: (node, children) => (
      <UniversalLink href={node.data.uri}>{children}</UniversalLink>
    ),
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      if (node.data.target && node.data.target.table) {
        const { tableData } = node.data.target.table

        if (tableData) return <Table data={tableData} />
      }
      return null
    },
  },
  renderText: (text) =>
    text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text]),
}

export default ({ content, ...rest }) => {
  return <Wrapper {...rest}>{renderRichText(content, options)}</Wrapper>
}
