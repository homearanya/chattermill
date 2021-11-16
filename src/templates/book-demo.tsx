import { graphql } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import BookDemoDetails from "../components/book-demo-details"
import BookDemoForm from "../components/book-demo-form"
import SEO from "../components/seo"
import media from "../styles/media"

interface BookDemoProps {
  data: {
    bookDemo: {
      frontmatter: {
        title: string
        description: string
        details: {
          logo: {
            publicURL: string
          }
          title: string
          upTitle: string
          subTitle: string
          brandsSection: {
            title: string
            brands: {
              alt?: string
              logo: {
                publicURL: string
              }
            }[]
          }
        }
        form: {
          background: {
            publicURL: string
          }
          title: string
          subTitle: string
          button: {
            text: string
          }
          fields: {
            label: string
            type: string
            id: string
          }[]
        }
      }
    }
  }
}

const BookDemo: React.FC<BookDemoProps> = ({ data }) => {
  const {
    bookDemo: {
      frontmatter: { title, description, details, form },
    },
  } = data
  return (
    <Container>
      <SEO title={title} description={description} />
      <Helmet>
        <script
          src="https://js.na.chilipiper.com/marketing.js"
          type="text/javascript"
          async
        />
      </Helmet>
      <BookDemoDetails data={details} />
      <BookDemoForm data={form} />
    </Container>
  )
}

export default BookDemo

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;

  ${media.lessThan("sm")`
  grid-template-columns: 1fr;
  `};
`

export const bookDemo = graphql`
  query bookDemoQuery($id: String!) {
    bookDemo: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        details {
          logo {
            publicURL
          }
          title
          upTitle
          subTitle
          brandsSection {
            title
            brands {
              alt
              logo {
                publicURL
              }
            }
          }
        }
        form {
          background {
            publicURL
          }
          title
          button {
            text
          }
          fields {
            label
            type
            id
          }
        }
      }
    }
  }
`
