import React, { useState, useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInView } from "react-intersection-observer"
import { Flipper, Flipped } from "react-flip-toolkit"
import { scroller } from "react-scroll"

import PartnersSidebar, { PartnerTypes } from "./partners-sidebar"
import Sidebar from "../sidebar"
import PartnerTile from "./partner-tile"
import {
  StyledSection,
  StyledContainer,
  Grid,
  Results,
  TableWrapper,
  TableContainer,
  StyledHeading,
} from "./partners-table.styled"

export interface PartnersTableData {
  heading?: string
}

interface PartnersTableProps {
  readonly data: PartnersTableData
  readonly withBoxShadow?: boolean
  readonly withBorder?: boolean
}

const PartnersTable = ({
  data: { heading },
  withBoxShadow,
  withBorder,
}: PartnersTableProps) => {
  const [partnerTypeSelected, setPartnerTypeSelected] = useState("All")

  const [headingRef, headingInView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  })
  const {
    site: {
      siteMetadata: {
        partners: { pathPrefix },
      },
    },
    allContentfulPartner,
    contentfulPartnersTable,
  } = useStaticQuery<GatsbyTypes.PartnersTableQuery>(
    graphql`
      query PartnersTable {
        site {
          siteMetadata {
            partners {
              pathPrefix
            }
          }
        }
        allContentfulPartner(sort: { order: ASC, fields: [title] }) {
          edges {
            node {
              id
              title
              slug
              featured
              partnerType {
                id
                title
              }
              description
              landingUrl
              logo {
                title
                description
                file {
                  url
                }
                gatsbyImageData(
                  width: 200
                  height: 70
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
        contentfulPartnersTable {
          integrations {
            id
            title
            slug
            description
            featured
            partnerType {
              id
              title
            }
            landingUrl
            logo {
              title
              description
              file {
                url
              }
              gatsbyImageData(
                width: 200
                height: 70
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    `
  )

  const allPartners = useMemo(() => {
    const restPartners = allContentfulPartner.edges
      .filter(
        ({ node }) =>
          contentfulPartnersTable.integrations.findIndex(
            partner => node.id === partner.id
          ) === -1
      )
      .map(({ node }) => node)
    return [
      ...contentfulPartnersTable.integrations.filter(e => e.featured),
      ...restPartners.filter(e => e.featured),
      ...contentfulPartnersTable.integrations.filter(e => !e.featured),
      ...restPartners.filter(e => !e.featured),
    ]
  }, [allContentfulPartner, contentfulPartnersTable])

  const partnerTypes: PartnerTypes = useMemo(
    () =>
      allContentfulPartner.edges.reduce((acc, { node: { partnerType } }) => {
        if (!acc["All"]) acc["All"] = 0
        acc["All"] += 1
        partnerType.forEach(({ title }) => {
          if (!acc[title]) acc[title] = 0
          acc[title] += 1
        })
        return acc
      }, {}),
    [allContentfulPartner]
  )
  const selectPartnerType = partnerType => {
    setPartnerTypeSelected(partnerType)
    scroller.scrollTo("table-wrapper", {
      duration: 1500,
      smooth: "easeInOut",
    })
  }
  const filteredPartners = useMemo(
    () =>
      allPartners.filter(({ partnerType }) => {
        return partnerTypeSelected === "All"
          ? true
          : partnerType.find(({ title }) => title === partnerTypeSelected)
      }),
    [partnerTypeSelected]
  )

  return (
    <StyledSection className="benefits-section" withBorder={withBorder}>
      <Flipper flipKey={filteredPartners.map(({ id }) => id).join("")}>
        <StyledContainer>
          {heading && (
            <StyledHeading
              dangerouslySetInnerHTML={{ __html: heading }}
              ref={headingRef}
              inView={headingInView}
            />
          )}
          <Grid>
            <Sidebar>
              <PartnersSidebar
                partnerTypes={partnerTypes}
                partnerTypeSelected={partnerTypeSelected}
                selectPartnerType={selectPartnerType}
              />
            </Sidebar>
            <TableWrapper id="table-wrapper">
              <Results>{`${partnerTypes[partnerTypeSelected]} results`}</Results>
              <TableContainer>
                {filteredPartners.map(partner => {
                  return (
                    <Flipped key={partner.id} flipId={partner.id}>
                      <PartnerTile
                        partner={partner as GatsbyTypes.ContentfulPartner}
                        pathPrefix={pathPrefix}
                        withBoxShadow={withBoxShadow}
                      />
                    </Flipped>
                  )
                })}
              </TableContainer>
            </TableWrapper>
          </Grid>
        </StyledContainer>
      </Flipper>
    </StyledSection>
  )
}

export default PartnersTable
