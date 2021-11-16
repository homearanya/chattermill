import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Row, Col } from "react-awesome-styled-grid"
import {
  StyledContainer,
  HeaderLogo,
  Heading,
  Description,
  SubHeading,
  FormContainer,
  LogosGrid,
  CTACX,
  CxButton,
} from "./download-report.styled"
import BookingCom from "../../images/bookingcom.inline.svg"
import Uber from "../../images/uber.inline.svg"
import Spotify from "../../images/spotify-logo.inline.svg"
import GetYourGuide from "../../images/getyourguide-logo.inline.svg"
import HellofreshColorIcon from "../../images/hellofresh-logo.png"
import Wise from "../../images/wise.svg"
import ContactForm from "../forms/contact-form"
import { getSrc } from "gatsby-plugin-image"

export interface DownloadTEIHeaderProps {
  headerLogo: {
    childImageSharp: GatsbyTypes.ImageSharp
  }
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

const DownloadTEI: React.FC<DownloadTEIHeaderProps> = ({
  headerLogo,
  heading,
  subHeading,
  description,
  form,
  file,
  cx,
}) => {
  const linkRef = React.useRef<HTMLAnchorElement | null>(null)
  const [formId, setFormId] = React.useState(null)
  const {
    site: {
      siteMetadata: {
        hubspotConfig: {
          portalId,
          total_economic_impact_formId,
          newsletter_formId,
          solution_demo_formId,
          datasheet_overview_report_formId,
          datasheet_growth_report_formId,
          datasheet_enterprise_report_formId,
        },
      },
    },
  } = useStaticQuery<GatsbyTypes.DownloadTEIQueryQuery>(graphql`
    query DownloadTEIQuery {
      site {
        siteMetadata {
          hubspotConfig {
            portalId
            newsletter_formId
            solution_demo_formId
            total_economic_impact_formId
            datasheet_overview_report_formId
            datasheet_growth_report_formId
            datasheet_enterprise_report_formId
          }
        }
      }
    }
  `)
  const returnKey = (key: string) => {
    const keys = [
      {
        name: "total_economic_impact_formId",
        value: total_economic_impact_formId,
      },
      {
        name: "datasheet_overview_report_formId",
        value: datasheet_overview_report_formId,
      },
      {
        name: "datasheet_growth_report_formId",
        value: datasheet_growth_report_formId,
      },
      {
        name: "datasheet_enterprise_report_formId",
        value: datasheet_enterprise_report_formId,
      },
    ]
    const requestedKey = keys.filter(e => e.name === key)
    return requestedKey[0]?.value
  }

  React.useEffect(() => {
    setFormId(returnKey(form.key))
  }, [])

  return (
    <>
      <StyledContainer>
        <Row align={headerLogo && "center"}>
          <Col xs={4} sm={4} md={5} lg={6}>
            {headerLogo?.childImageSharp && (
              <HeaderLogo
                src={getSrc(headerLogo.childImageSharp.gatsbyImageData)}
              />
            )}
            <Heading>{heading}</Heading>
            <SubHeading>{subHeading}</SubHeading>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
            <LogosGrid>
              <BookingCom />
              <Uber />
              <img src={HellofreshColorIcon} />
              <Spotify />
              <img src={Wise} />
              <GetYourGuide />
            </LogosGrid>
          </Col>
          <Col xs={4} sm={4} md={7} lg={5} offset={{ lg: 1 }}>
            <FormContainer>
              <h2>{form.title}</h2>
              <ContactForm
                analyticsOptions={{
                  category: "Subscribe",
                  label: "Newsletter Subscription",
                }}
                hubspotOptions={{
                  portalId,
                  formId,
                  newsletterFormId: newsletter_formId,
                  solutionDemoFormId: solution_demo_formId,
                }}
                buttonText={form.button.text}
                actionOnSuccess={() => {
                  linkRef.current && linkRef.current.click()
                }}
              />
              <div style={{ height: 0, width: 0, overflow: "hidden" }}>
                <a
                  ref={linkRef}
                  href={file.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  testing
                </a>
              </div>
            </FormContainer>
          </Col>
        </Row>
      </StyledContainer>
      <CTACX>
        <h2>{cx.title}</h2>
        <CxButton to={cx.button.link}>{cx.button.text}</CxButton>
      </CTACX>
    </>
  )
}

export default DownloadTEI
