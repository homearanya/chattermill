import React from "react"
import { Row, Container } from "react-awesome-styled-grid"
import { StyledSection } from "./brands-section-2.styled"

import Brands from "../brands"

import TechCrunchIcon from "../../images/tech-crunch.svg"
import TechCrunchColorIcon from "../../images/tech-crunch-color.svg"
import TechWorldIcon from "../../images/tech-world.png"
import TechWorldColorIcon from "../../images/tech-world-color.png"
import UKTNIcon from "../../images/uktn.png"
import UKTNColorIcon from "../../images/uktn-color.png"
import CustomerThinkIcon from "../../images/customer-think.png"
import CustomerThinkColorIcon from "../../images/customer-think-color.png"
import ResearchLiveIcon from "../../images/research-live.png"
import ResearchLiveColorIcon from "../../images/research-live-color.png"

interface BrandsSection2Props {
  borderBottom?: boolean
  borderTop?: boolean
  withObserver?: boolean
}

export const BrandsSection2 = ({
  borderTop,
  borderBottom,
  withObserver,
}: BrandsSection2Props) => {
  const brands = [
    {
      name: "TechCrunch",
      whiteIcon: TechCrunchIcon,
      colorIcon: TechCrunchColorIcon,
      link: "https://techcrunch.com/",
    },
    {
      name: "TechWorld",
      whiteIcon: TechWorldIcon,
      colorIcon: TechWorldColorIcon,
      link: "https://www.techworld.com/",
    },
    {
      name: "UKTN",
      whiteIcon: UKTNIcon,
      colorIcon: UKTNColorIcon,
      link: "https://www.uktech.news/",
    },
    {
      name: "CustomerThink",
      whiteIcon: CustomerThinkIcon,
      colorIcon: CustomerThinkColorIcon,
      link: "https://customerthink.com/",
    },
    {
      name: "ResearchLive",
      whiteIcon: ResearchLiveIcon,
      colorIcon: ResearchLiveColorIcon,
      link: "https://www.research-live.com/",
    },
  ]
  return (
    <StyledSection borderTop={borderTop} borderBottom={borderBottom}>
      <Container>
        <Row
          justify={{ xs: "center", md: "space-between", lg: "space-around" }}
          align={{ sm: "center" }}
        >
          <Brands
            columsXS={4}
            brands={brands}
            withObserver={withObserver}
            noGutter
          />
        </Row>
      </Container>
    </StyledSection>
  )
}

export default BrandsSection2
