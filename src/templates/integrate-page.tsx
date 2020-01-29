import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import StandardHeader, {
  StandardHeaderData
} from "../components/standard-header";
import BrandsSection from "../components/brands-section";
import IntegrateOverview, {
  IntegrateOverviewData
} from "../components/integrate-overview";
import BenefitsSection, {
  BenefitsSectionData
} from "../components/benefits-section";
import CTA2, { CTA2Data } from "../components/cta2";
import BrandsSection2 from "../components/brands-section-2";
import CaseStudySection, {
  CaseStudySectionData
} from "../components/case-study-section";
import IntegrateTable, {
  IntegrateTableData
} from "../components/integrate-table";

import "../styles/scss/styles.scss";

interface IntegratePageProps {
  readonly data: PageQueryData;
}

const IntegratePage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        overview,
        benefitsSection,
        integrateTable,
        CTASection,
        caseStudySection
      }
    }
  }
}: IntegratePageProps) => {
  return (
    <Layout className="integrate-page">
      <SEO title={title} description={description} />
      <StandardHeader data={header} />
      <BrandsSection />
      <IntegrateOverview data={overview} />
      <BenefitsSection data={benefitsSection} withBoxShadow />
      <IntegrateTable data={integrateTable} withBoxShadow />
      <BrandsSection2 withObserver />
      <CTA2 data={CTASection} />
      <CaseStudySection data={caseStudySection} />
    </Layout>
  );
};

export default IntegratePage;

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string;
      description: string;
      header: StandardHeaderData;
      overview: IntegrateOverviewData;
      benefitsSection: BenefitsSectionData;
      integrateTable: IntegrateTableData;
      CTASection: CTA2Data;
      caseStudySection: CaseStudySectionData;
    };
  };
}

export const query = graphql`
  query IntegratePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          backgroundImage {
            src {
              childImageSharp {
                fluid(maxWidth: 571) {
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
            button {
              text
              link
              inverted
            }
          }
        }
        overview {
          textBlock {
            subHeading
            text
          }
          image {
            childImageSharp {
              fluid(maxWidth: 1042) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          imageSmall {
            childImageSharp {
              fixed(width: 275) {
                ...GatsbyImageSharpFixed
              }
            }
            publicURL
          }
        }
        benefitsSection {
          heading
          benefits {
            imageName
            smallHeading
            text
          }
        }
        integrateTable {
          heading
          textBlock {
            subHeading
          }
          benefits {
            imageName
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
        CTASection {
          shapeColor
          text
          textPlaceholder
          buttonText
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
      }
    }
  }
`;
