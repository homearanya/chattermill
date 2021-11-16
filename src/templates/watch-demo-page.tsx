import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { graphql, navigate } from "gatsby"
import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"
import { Router, RouteComponentProps } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BrandsSection2 from "../components/brands-section-2"
import ContactForm from "../components/forms/contact-form"

import CTA2, { CTA2Data } from "../components/cta2"
import Image from "../components/image"
import TextBlockStandard from "../components/text-block"

import media from "../styles/media"
import { $colorHeading, $lime } from "../styles/variables"
import { MediumHeading, fadeInTop } from "../styles/common.styled"
import { centerTextBlock, staggeredAnimation } from "../styles/mixins"

import { TextBlockData } from "../types"

import "../styles/scss/styles.scss"

type BrandIcons = {
  image: GatsbyTypes.File
  alt: string
}[]

interface DefaultProps extends RouteComponentProps {
  heading: string
  html: string
  brandIcons: BrandIcons
  portalId: string
  formId: string
  newsletterFormId: string
  setWatchable: React.Dispatch<React.SetStateAction<boolean>>
}

const Default = ({
  heading,
  html,
  brandIcons,
  portalId,
  formId,
  newsletterFormId,
  setWatchable,
}: DefaultProps) => (
  <Section>
    <StyledContainer>
      <Wrapper>
        <TextBlockWrapper>
          <TextBlock dangerouslySetInnerHTML={{ __html: html }} />
          <BrandIconsWrapper>
            {brandIcons.map(({ image, alt }, i) => (
              <StyledImage image={image} alt={alt} />
            ))}
          </BrandIconsWrapper>
        </TextBlockWrapper>
        <FormWrapper>
          <FormArea>
            <Heading dangerouslySetInnerHTML={{ __html: heading }} />
            <ContactForm
              analyticsOptions={{
                category: "Subscribe",
                label: "Newsletter Subscription",
              }}
              hubspotOptions={{
                portalId,
                formId,
                newsletterFormId,
              }}
              buttonText={"Watch Demo"}
              actionOnSuccess={() => {
                setWatchable(true)
                navigate("/watch-demo/video-tour")
              }}
            />
          </FormArea>
        </FormWrapper>
      </Wrapper>
    </StyledContainer>
  </Section>
)

interface VideoProps extends RouteComponentProps {
  textBlock: TextBlockData
  watchable: boolean
}

const Video = ({ textBlock, watchable }: VideoProps) => {
  if (!watchable) navigate("/watch-demo/")
  const wistiaVideo = `<div  class=\"wistia_embed wistia_async_${"99uf927wzc"}\">&nbsp;</div >`
  return (
    <Section style={{ paddingBottom: 0 }}>
      <StyledContainer>
        <StyledTextBlock
          className="text-block-header"
          textBlock={textBlock}
          classNames={Object.keys(textBlock)}
        />
        <Separator />
        <VideoContainer>
          <StyledVideo dangerouslySetInnerHTML={{ __html: wistiaVideo }} />
        </VideoContainer>
      </StyledContainer>
    </Section>
  )
}
interface WatchDemoPageProps {
  readonly path: string
  readonly data: PageQueryData
}

const WatchDemoPage = ({
  path,
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        description,
        brandIcons,
        watchDemoForm,
        CTASection,
        watchVideoPage,
      },
    },
    site: {
      siteMetadata: {
        hubspotConfig: { portalId, product_demo_formId, newsletter_formId },
      },
    },
  },
}: WatchDemoPageProps) => {
  const [watchable, setWatchable] = useState(false)
  return (
    <Layout className="watch-tour-page">
      <Helmet>
        <script
          src="https://fast.wistia.com/assets/external/E-v1.js"
          async
        ></script>
      </Helmet>
      <SEO title={title} description={description} />
      <Router basepath="/watch-demo">
        <Video
          path="/video-tour"
          textBlock={watchVideoPage}
          watchable={watchable}
        />
        <Default
          path="/"
          html={html}
          brandIcons={brandIcons}
          heading={watchDemoForm.title}
          setWatchable={setWatchable}
          portalId={portalId}
          formId={product_demo_formId}
          newsletterFormId={newsletter_formId}
        />
      </Router>
      <BrandsSection2 withObserver />
      <CTA2 data={CTASection} />
    </Layout>
  )
}

export default WatchDemoPage

interface PageQueryData {
  markdownRemark: {
    html: string
    frontmatter: {
      title: string
      description: string
      brandIcons: BrandIcons
      watchDemoForm: { title: string }
      CTASection: CTA2Data
      watchVideoPage: TextBlockData
    }
  }
  site: {
    siteMetadata: {
      hubspotConfig: {
        portalId: string
        product_demo_formId: string
        newsletter_formId: string
      }
    }
  }
}

export const query = graphql`
  query WatchDemoPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        brandIcons {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 120
                quality: 100
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            publicURL
          }
          alt
        }
        watchDemoForm {
          title
        }
        CTASection {
          shapeColor
          text
          subText
        }
        watchVideoPage {
          subHeading
          text
        }
      }
    }
    site {
      siteMetadata {
        hubspotConfig {
          portalId
          newsletter_formId
          product_demo_formId
        }
      }
    }
  }
`
const Section = styled.section`
  padding: 5rem 0;
  ${media.lessThan("md")`
  padding: 5rem 0 0;
`}
`
const StyledContainer = styled(Container)``
const Wrapper = styled.div`
  display: flex;

  ${media.lessThan("md")`
    flex-direction: column;
`}
`
const TextBlockWrapper = styled.div`
  flex: 1 0 55%;
  padding-right: 3rem;
  ${media.lessThan("md")`
    padding-right: 0;
    text-align: center;
    margin-bottom: 4rem;
`}
`
const TextBlock = styled.div`
  max-width: 53.1rem;
  ${media.lessThan("md")`
    margin: 0 auto;
  `}
  h2 {
    color: ${$colorHeading};
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 2rem;
  }

  p {
    color: ${$colorHeading};
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 3rem;
  }
  ul {
    margin-bottom: 3rem;
  }
  li {
    color: ${$colorHeading};
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    list-style: none;
    :before {
      content: "-";
      font-weight: bold;
      margin-right: 1rem;
      ${media.lessThan("md")`
        content: none;
      `}
    }
  }
`

const BrandIconsWrapper = styled.div`
  max-width: 40rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem 2rem;
  ${media.lessThan("md")`
    margin: 0 auto;
    justify-items: end;
  `}
  ${media.lessThan("sm")`
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items:center;
  `}
`
const StyledImage = styled(Image)`
  max-width: 170px;
  max-height: 40px;
`
const FormWrapper = styled.div`
  flex: 1 0 45%;
  ${media.lessThan("md")`
    max-width: 50rem;
    margin: 0 auto;
  `}
`
export const FormArea = styled.div`
  flex: 1 0 60%;
  padding: 7rem 5rem;
  margin-right: auto;
  border: 1px solid #979797;
  ${media.lessThan("sm")`
      padding: 4rem 2rem 1rem;
  `};
`
export const Heading = styled(MediumHeading)`
  font-size: 35px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 4rem;
  color: ${$colorHeading};
  ${media.lessThan("sm")`
    text-align: center;
    font-size: 3rem;
  `};

  span.underline {
    :before {
      border-color: ${$lime};
      width: 130%;
      margin-top: 1rem;
    }
  }
`

interface StyledTextBlockProps {
  classNames: string[]
}

const StyledTextBlock = styled(TextBlockStandard)<StyledTextBlockProps>`
  max-width: 51rem;
  margin: 0 auto;
  .subHeading {
    font-size: 3rem;
    line-height: 3.8rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  .text {
    text-align: center;
  }

  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 1, 0, 0.2, props.classNames)}

  ${media.lessThan("sm")`
    padding: 3rem 0;
    ${centerTextBlock};
    
    .subHeading {
      font-size: 2.6rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }

  `}
`
const Separator = styled.div`
  width: 8.7rem;
  height: 0.2rem;
  background-color: ${$lime};
  margin: 0 auto 3rem;
`

const VideoContainer = styled.div`
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
`

const StyledVideo = styled.div`
  padding-top: 54.3%;
  position: relative;

  & > div:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
