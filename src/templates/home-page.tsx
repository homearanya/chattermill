import React from "react";

import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeHeader, { HomeHeaderData } from "../components/home-header";
import BrandsSection from "../components/brands-section";
import BrandsSection2 from "../components/brands-section-2";
import PlatformSection, {
  PlatformSectionData
} from "../components/platform-section";
import CaseStudySection, {
  CaseStudySectionData
} from "../components/case-study-section";
import CTA, { CTAData } from "../components/cta";

import "../styles/scss/styles.scss";

interface HomePageProps {
  readonly data: PageQueryData;
}

const HomePage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        platformSection,
        caseStudySection,
        CTASection
      }
    }
  }
}: HomePageProps) => (
  <Layout className="home-page">
    <SEO title={title} description={description} />
    <HomeHeader data={header} />
    <BrandsSection />
    <PlatformSection data={platformSection} />
    <CaseStudySection data={caseStudySection} />
    <CTA data={CTASection} />
    <BrandsSection2 borderBottom withObserver />
  </Layout>
);

export default HomePage;

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string;
      description: string;
      header: HomeHeaderData;
      platformSection: PlatformSectionData;
      caseStudySection: CaseStudySectionData;
      CTASection: CTAData;
    };
  };
}

export const query = graphql`
  query HomePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                fixed(width: 767) {
                  ...GatsbyImageSharpFixed
                }
              }
              publicURL
            }
            alt
          }
          textBlock {
            heading
            subHeading
            text
            button {
              text
              link
            }
          }
        }
        platformSection {
          heading
          button {
            text
            link
          }
          features {
            shapeColor
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 640) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
              alt
            }
            textBlock {
              imageName
              subHeading
              text
              button {
                text
                link
              }
            }
          }
        }
        caseStudySection {
          backgroundImage {
            childImageSharp {
              fixed(width: 575) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          textBlock {
            tagline
            subHeading
            text
          }
          image {
            childImageSharp {
              fluid(maxWidth: 528) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        customerExperienceSection {
          heading
          experiences {
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
              alt
            }
            textBlock {
              tagline
              subHeading
              text
              button {
                text
                link
              }
            }
          }
        }
        CTASection {
          shapeColor
          textBlock {
            image {
              childImageSharp {
                fluid(maxWidth: 253) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            subHeading
            text
            button {
              text
              link
              secondary
            }
          }
        }
      }
    }
  }
`;
