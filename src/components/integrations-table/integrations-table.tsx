import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { contentfulImageMap } from "../../utils/helpers"

import { Grid, StyledTextBlock } from "./integrations-table.styled"

import { TextBlockData } from "../../types"

interface IntegrationTileProps {
  integration: GatsbyTypes.ContentfulIntegration
  pathPrefix: string
}

const IntegrationTile = ({ integration, pathPrefix }: IntegrationTileProps) => {
  const {
    logo,
    title,
    slug,
    shortDescription,
    integrationCategory,
  } = integration
  const textBlock: TextBlockData = {
    image: logo ? contentfulImageMap(logo) : undefined,
    smallHeading: ` <span class="underline">${title}</span>`,
    text: [shortDescription],
    tagline: integrationCategory.title,
    moreDetails: {
      button: {
        text: "Learn more",
        link: `${pathPrefix}${slug ? slug : ""}`,
        arrow: false,
      },
    },
  }
  return <StyledTextBlock textBlock={textBlock} withBoxShadow withObserver />
}

export interface IntegrationsTableData {
  heading?: string
  subHeading: string
}

interface IntegrationsTableProps {
  readonly currentIntegration: string
  className?: string
}

const IntegrationsTable = ({
  currentIntegration,
  className,
  ...props
}: IntegrationsTableProps) => {
  const {
    site: {
      siteMetadata: {
        integrations: { pathPrefix },
      },
    },
    contentfulIntegrationsTable,
  } = useStaticQuery<GatsbyTypes.IntegrationsTableQuery>(
    graphql`
      query IntegrationsTable {
        site {
          siteMetadata {
            integrations {
              pathPrefix
            }
          }
        }

        contentfulIntegrationsTable {
          integrations {
            id
            title
            slug
            shortDescription
            logo {
              title
              description
              file {
                url
              }
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            integrationCategory {
              title
            }
          }
        }
      }
    `
  )

  return (
    <Grid className={className} {...props}>
      {contentfulIntegrationsTable.integrations
        .filter(({ id }) => id !== currentIntegration)
        .map((integration) => (
          <IntegrationTile
            key={integration.id}
            integration={integration as GatsbyTypes.ContentfulIntegration}
            pathPrefix={pathPrefix}
          />
        ))}
    </Grid>
  )
}

export default IntegrationsTable
