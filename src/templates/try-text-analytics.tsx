import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Container } from "react-awesome-styled-grid";

import media from "../styles/media";
import {
  staggeredAnimation,
  animation,
  centerTextBlock
} from "../styles/mixins";
import { fadeInTop } from "../styles/common.styled";
import { $colorPrimary, $colorSecondary } from "../styles/variables";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BrandsSection2 from "../components/brands-section-2";
import CTA2, { CTA2Data } from "../components/cta2";
import TextBlock from "../components/text-block";
import TryTextAnalyticsForm from "../components/forms/try-text-analytics-form";

import { TextBlockData } from "../types";

import "../styles/scss/styles.scss";

interface HomePageProps {
  readonly data: PageQueryData;
  readonly location: Location;
}

const HomePage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description, CTASection, header }
    }
  },
  location
}: HomePageProps) => {
  return (
    <Layout className="home-page">
      <SEO title={title} description={description} />
      <StyledSection>
        <StyledContainer>
          <StyledTextBlock
            textBlock={header.textBlock}
            classNames={Object.keys(header.textBlock)}
          />
          <TryTextAnalyticsForm pathname={location.pathname} />
          <SignIn>
            Ready to start your trial? Sign up{" "}
            <a href="https://chattermill-signup.netlify.app/?ref=try_text_analytics">
              here
            </a>{" "}
            for insights in minutes
          </SignIn>
        </StyledContainer>
      </StyledSection>
      <BrandsSection2 withObserver />
      <CTA2 data={CTASection} />
    </Layout>
  );
};

export default HomePage;

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string;
      description: string;
      header: {
        textBlock: TextBlockData;
      };
      CTASection: CTA2Data;
    };
  };
}

export const query = graphql`
  query TryAnalyticsPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          textBlock {
            subHeading
            text
          }
        }
        CTASection {
          shapeColor
          text
          subText
        }
      }
    }
  }
`;
const StyledSection = styled.section``;

const StyledContainer = styled(Container)`
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface StyledTextBlockProps {
  classNames: string[];
}
const StyledTextBlock = styled(TextBlock)<StyledTextBlockProps>`
  padding: 0rem 0 4rem;
  ${centerTextBlock};
  max-width: 70rem;

  .subHeading {
    font-size: 3rem;
    line-height: 3.4rem;
  }

  ${props =>
    props.classNames &&
    staggeredAnimation(fadeInTop, 1, 0, 0.2, props.classNames)}

  ${media.lessThan("lg")`
  .subHeading {
      font-size: 2.8rem;
      line-height: 3.2rem;
      margin-bottom: 1.5rem;
    }
  `}

  ${media.lessThan("md")`
  .subHeading {
      font-size: 2.6rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }
  `}

  ${media.lessThan("sm")`
    .subHeading {
      font-size: 2.6rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }
    .text {
    margin-bottom: 0;
  }
  `}
`;
const SignIn = styled.p`
  font-size: 1.4rem;
  margin-top: 3rem;
  text-align: center;
  color: ${$colorSecondary};
  ${animation(fadeInTop, 1, 0.8)};

  a,
  a:link,
  a:visited {
    color: ${$colorPrimary};
    text-decoration: none;
  }

  a:hover,
  a:active {
    color: ${$colorPrimary};
  }
`;
