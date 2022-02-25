import React from "react"
import { graphql } from "gatsby"
import LayoutPPC from "../components/layout-ppc"
import SEO from "../components/seo"
import StandardHeader, {
  StandardHeaderData,
} from "../components/standard-header"
import { Brand } from "../components/brands"
import BrandsSection from "../components/brands-section"
import TextBlockVideoSection, {
  TextBlockVideoSectionData,
} from "../components/textblock-video-section"
import SignUpSection from "../components/sign-up-section"
import "../styles/scss/styles.scss"
import PpcSignUpSection from "../components/ppc-signup-section"
import { contentfulImageMap } from "../utils/helpers"

interface PpcPageProps {
  readonly data: GatsbyTypes.PpcPageQuery
}

const PpcPage = ({ data }: PpcPageProps) => {
  const {
    contentfulPpc: {
      title,
      headerHeading,
      headerSubheading,
      headerText: { headerText },
      headerButtonText,
      headerButtonLink,
      headerImage,
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
      signup,
    },
  } = data
  const header: StandardHeaderData = {
    backgroundImage: {
      src: contentfulImageMap(headerImage),
      alt: headerImage.title,
    },
    textBlock: {
      tagline: headerHeading,
      subHeading: headerSubheading,
      text: [headerText],
      button: {
        text: headerButtonText,
        link: headerButtonLink,
        secondary: true,
      },
    },
  }
  const understand: TextBlockVideoSectionData = {
    textPosition: "right",
    image: contentfulImageMap(section1Image),
    alt: section1Image.title,
    textBlock: {
      subHeading: section1Heading,
      text: [section1Text],
    },
  }
  const measure: TextBlockVideoSectionData = {
    textPosition: "left",
    image: contentfulImageMap(section2Image),
    alt: section2Image.title,
    textBlock: {
      subHeading: section2Heading,
      text: [section2Text],
    },
  }
  const prioritise: TextBlockVideoSectionData = {
    textPosition: "right",
    image: contentfulImageMap(section3Image),
    alt: section3Image.title,
    textBlock: {
      subHeading: section3Heading,
      text: [section3Text],
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
    <LayoutPPC className="ppc-page">
      <SEO title={title} description={headerSubheading} />
      <StandardHeader data={header} />
      <BrandsSection brands={brands} withObserver />
      <TextBlockVideoSection data={understand} className="first" />
      <TextBlockVideoSection data={measure} className="second" />
      <TextBlockVideoSection data={prioritise} className="third" />
      <PpcSignUpSection />
      <SignUpSection
        data={{
          ...signup,
          imageFile: contentfulImageMap(signup.image),
          documentFile: { ...signup.documentToDownload.file },
        }}
      />
    </LayoutPPC>
  )
}

export default PpcPage

const query = graphql`
  query PpcPage($slug: String!) {
    contentfulPpc(slug: { eq: $slug }) {
      title
      headerHeading
      headerSubheading
      headerText {
        headerText
      }
      headerButtonText
      headerButtonLink
      headerImage {
        file {
          url
        }
        title
        gatsbyImageData(
          width: 683
          layout: CONSTRAINED
          placeholder: NONE
          formats: [AUTO, WEBP]
        )
      }
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
