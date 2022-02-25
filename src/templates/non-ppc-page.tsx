import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Brand } from "../components/brands"
import BrandsSection from "../components/brands-section"
import TextBlockImageSection, {
  TextBlockImageSectionData,
} from "../components/textblock-image-section"
import SignUpSection from "../components/sign-up-section"
import "../styles/scss/styles.scss"
import PpcSignUpSection from "../components/ppc-signup-section"
import { contentfulImageMap } from "../utils/helpers"
import Layout from "../components/layout"

interface PpcPageProps {
  readonly data: PageQueryData
}

const PpcPage = ({
  data: {
    contentfulPpc: {
      title,
      headerSubheading,
      brands: brandsContentful,
      section1Image,
      section1Heading,
      section1Text: { section1Text },
      section2Image,
      section2Heading,
      section2Text: { section2Text },
      section3Image,
      section3Heading,
      section3Text: { section3Text },
      section4Image,
      section4Heading,
      section4Text: { section4Text },
      signup,
    },
  },
}: PpcPageProps) => {
  const first: TextBlockImageSectionData = {
    textPosition: "right",
    image: contentfulImageMap(section1Image),
    alt: section1Image.title,
    textBlock: {
      subHeading: section1Heading,
      text: [section1Text],
    },
  }
  const second: TextBlockImageSectionData = {
    textPosition: "left",
    image: contentfulImageMap(section2Image),
    alt: section2Image.title,
    textBlock: {
      subHeading: section2Heading,
      text: [section2Text],
    },
  }
  const third: TextBlockImageSectionData = {
    textPosition: "right",
    image: contentfulImageMap(section3Image),
    alt: section3Image.title,
    textBlock: {
      subHeading: section3Heading,
      text: [section3Text],
    },
  }
  const fourth: TextBlockImageSectionData = {
    textPosition: "left",
    image: contentfulImageMap(section4Image),
    alt: section4Image.title,
    textBlock: {
      subHeading: section4Heading,
      text: [section4Text],
    },
  }

  const brands: Brand[] = brandsContentful.map(
    ({ title, website, logo, logoHover }) => ({
      name: title,
      link: website,
      whiteIcon: logo.file.url,
      colorIcon: logoHover.file.url,
    })
  )

  return (
    <Layout className="non-ppc-page">
      <SEO title={title} description={headerSubheading} />
      <SignUpSection
        data={{
          ...signup,
          imageFile: contentfulImageMap(signup.image),
          documentFile: { ...signup.documentToDownload.file },
        }}
      />
      <BrandsSection brands={brands} withObserver />
      <TextBlockImageSection data={first} className="first" />
      <TextBlockImageSection data={second} className="second" />
      <TextBlockImageSection data={third} className="third" />
      <TextBlockImageSection data={fourth} className="fourth" />
      <PpcSignUpSection />
    </Layout>
  )
}

export default PpcPage

export const query = graphql`
  query NonPpcPage($slug: String!) {
    contentfulPpc(slug: { eq: $slug }) {
      title
      headerSubheading
      brands {
        id
        title
        website
        logo {
          file {
            url
          }
        }
        logoHover {
          file {
            url
          }
        }
      }

      section1Image {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 550
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      section1Heading
      section1Text {
        section1Text
      }
      section2Image {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 550
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      section2Heading
      section2Text {
        section2Text
      }
      section3Image {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 550
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      section3Heading
      section3Text {
        section3Text
      }
      section4Image {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 550
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      section4Heading
      section4Text {
        section4Text
      }
      brands2 {
        id
        title
        website
        logo {
          file {
            url
          }
        }
        logoHover {
          file {
            url
          }
        }
      }
      signup {
        title
        subtitle
        image {
          file {
            url
            contentType
          }
          title
          gatsbyImageData(
            width: 575
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
        imageCaption
        documentToDownload {
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  }
`
