import { graphql } from "gatsby"
import * as React from "react"
import DownloadTEIHeader from "../components/download-report"
import Layout from "../components/layout"
import SEO from "../components/seo"

export interface DownloadTEIReportProps {
  data: PageQueryData
}

const DownloadReport: React.FC<DownloadTEIReportProps> = ({ data }) => {
  const {
    headerLogo,
    title,
    heading,
    subHeading,
    description,
    form,
    file,
    cx,
  } = data.downloadTEI.frontmatter
  return (
    <Layout>
      <SEO title={title} description={description} />
      <DownloadTEIHeader
        headerLogo={headerLogo}
        heading={heading}
        subHeading={subHeading}
        description={description}
        form={form}
        file={file}
        cx={cx}
      />
    </Layout>
  )
}

export default DownloadReport

interface PageQueryData {
  downloadTEI: {
    frontmatter: {
      headerLogo: any
      title: string
      heading: string
      subHeading: string
      description: string
      form: {
        key: string
        title: string
        button: {
          text: string
        }
      }
      file: {
        url: string
        fileName: string
      }
      cx: {
        title: string
        button: {
          text: string
          link: string
        }
      }
    }
  }
}

const query = graphql`
  query TEIDownloadPageQuery($id: String!) {
    downloadTEI: markdownRemark(id: { eq: $id }) {
      frontmatter {
        headerLogo {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [AUTO, WEBP]
            )
          }
        }
        title
        heading
        subHeading
        description
        form {
          key
          title
          button {
            text
          }
        }
        file {
          url
          fileName
        }
        cx {
          title
          button {
            text
            link
          }
        }
      }
    }
  }
`
