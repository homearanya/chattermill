import React from "react"
import { graphql } from "gatsby"
import media from "../styles/media"
import styled from "styled-components"
import Layout from "../components/layout"
import WhitepaperTable, {
  WhitepaperTableData,
} from "../components/whitepaper-table"
import SEO from "../components/seo"
import "../styles/scss/styles.scss"
import CTA2Blog from "../components/cta2-blog"

const data = {
  shapeColor: "#10C2ED",
  text: "Power your CX with Chattermill",
}

interface WhitePaperPageProps {
  readonly data: PageQueryData
}

const Resources = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description, whitepaperTable },
    },
  },
}: WhitePaperPageProps) => {
  return (
    <Layout className="whitepapers">
      <SEO
        title={"Chattermill Whitepapers"}
        description={
          "Resources. Our books, guides, and videos have helped thousands of your peers get better at their jobs. No fluff or sales pitches. Just quality information."
        }
      />
      <StyledSection>
        <StyledHeader>{title}</StyledHeader>
        <StyledSubHeader>{description}</StyledSubHeader>
      </StyledSection>
      <Section>
        <WhitepaperTable data={whitepaperTable}></WhitepaperTable>
      </Section>
      <CTA2Blog data={data} />
    </Layout>
  )
}

export default Resources

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: PageQueryData
      description: PageQueryData
      whitepaperTable: WhitepaperTableData
    }
  }
}

const query = graphql`
  query WhitepapersQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        whitepaperTable {
          textBlock {
            subHeading
          }
          benefits {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 375
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
            alt
            smallHeading
            text
            moreDetails {
              button {
                text
                link
                arrow
              }
            }
          }
        }
      }
    }
  }
`
const Section = styled.section``

const StyledHeader = styled.h1`
  font-size: 4rem;
  color: #291c45;
  text-align: center;
  padding-top: 2rem;
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20rem;
  background-color: #def200;

  ${media.lessThan("sm")`
    padding: 10rem;
    
  `}
`

const StyledSubHeader = styled.h2`
  font-size: 2rem;
  color: #291c45;
  text-align: center;
  padding-top: 2rem;
`
