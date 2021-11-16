import React from "react";
import { graphql } from "gatsby";

import TemplateView, { TemplateViewData } from "../components/template-view";
import Layout from "../components/layout";
import SEO from "../components/seo";

interface TemplatePageProps {
  readonly path: string;
  readonly data: PageQueryData;
}

const TemplatePage = ({
  path,
  data: {
    site: {
      siteMetadata: {
        templates: { pathPrefix },
        siteUrl
      }
    },
    contentfulTemplate
  }
}: TemplatePageProps) => {
  const {
    title: { title },
    slug,
    body: {
      childMarkdownRemark: { excerpt }
    },
    featuredImage: {
      file: { url }
    }
  } = contentfulTemplate;

  return (
    <Layout className="template-page">
      <SEO
        title={title}
        description={excerpt}
        featuredImage={url}
        postUrl={`${siteUrl}${pathPrefix}${slug}`}
      />
      <TemplateView data={contentfulTemplate} path={path} />
    </Layout>
  );
};

export default TemplatePage;

interface PageQueryData {
  site: {
    siteMetadata: {
      siteUrl: string;
      templates: {
        pathPrefix: string;
      };
    };
  };
  contentfulTemplate: TemplateViewData;
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        templates {
          pathPrefix
        }
      }
    }
    contentfulTemplate(slug: { eq: $slug }) {
      title {
        title
      }
      subtitle {
        subtitle
      }
      slug
      tags
      featuredImage {
        file {
          url
        }
        title
        fluid(maxWidth: 640) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      templateFile {
        file {
          url
          fileName
        }
      }

      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 80)
        }
      }
    }
  }
`;
