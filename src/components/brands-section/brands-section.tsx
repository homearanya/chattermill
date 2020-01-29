import React from "react"
import { Row } from "react-awesome-styled-grid"
import { StyledSection, StyledContainer } from "./brands-section.styled"

import Brands from "../brands"

import DeliverooWhiteIcon from "../../images/deliveroo-white.svg"
import DeliverooColorIcon from "../../images/deliveroo-color.svg"
import TransferwiseWhiteIcon from "../../images/transferwise-white.svg"
import TransferwiseColorIcon from "../../images/transferwise-color.svg"
import UberWhiteIcon from "../../images/uber-white.svg"
import UberColorIcon from "../../images/uber-color.svg"
import GetyourguideWhiteIcon from "../../images/getyourguide-white.svg"
import GetyourguideColorIcon from "../../images/getyourguide-color.svg"
import MonzoWhiteIcon from "../../images/monzo-white.svg"
import MonzoColorIcon from "../../images/monzo-color.svg"
import HellofreshWhiteIcon from "../../images/hello-fresh-white.svg"
import HellofreshColorIcon from "../../images/hello-fresh-color.svg"
import TrainlineWhiteIcon from "../../images/trainline-white.svg"
import TrainlineColorIcon from "../../images/trainline-color.svg"

interface BrandsSectionProps {
  withObserver?: boolean
}

export const BrandsSection = ({ withObserver }: BrandsSectionProps) => {
  const brands = [
    {
      name: "Deliveroo",
      whiteIcon: DeliverooWhiteIcon,
      colorIcon: DeliverooColorIcon,
      link: "https://deliveroo.com/",
    },
    {
      name: "Transferwise",
      whiteIcon: TransferwiseWhiteIcon,
      colorIcon: TransferwiseColorIcon,
      link: "https://transferwise.com/",
    },
    {
      name: "Uber",
      whiteIcon: UberWhiteIcon,
      colorIcon: UberColorIcon,
      link: "https://uber.com/",
    },
    {
      name: "Get your guide",
      whiteIcon: GetyourguideWhiteIcon,
      colorIcon: GetyourguideColorIcon,
      link: "https://www.getyourguide.com/",
    },
    {
      name: "Trainline",
      whiteIcon: TrainlineWhiteIcon,
      colorIcon: TrainlineColorIcon,
      link: "https://trainline.com/",
    },
    {
      name: "Hello fresh",
      whiteIcon: HellofreshWhiteIcon,
      colorIcon: HellofreshColorIcon,
      link: "https://hellofresh.com/",
    },
  ]
  return (
    <StyledSection>
      <StyledContainer>
        <Row justify={{ sm: "space-between" }} align={{ sm: "center" }}>
          <Brands columsXS={2} brands={brands} withObserver={withObserver} />
        </Row>
      </StyledContainer>
    </StyledSection>
  )
}

export default BrandsSection
