import React from "react"
import { Row } from "react-awesome-styled-grid"
import {
  StyledSection,
  StyledContainer,
  StyledMediumHeading,
} from "./brands-section.styled"

import Brands, { Brand } from "../brands"

import GoodieboxWhiteIcon from "../../images/goodiebox-logo-white.svg"
import GoodieboxColorIcon from "../../images/goodiebox-logo.svg"
import TransferwiseWhiteIcon from "../../images/transferwise-white.svg"
import TransferwiseColorIcon from "../../images/transferwise-color-banner.svg"
import UberWhiteIcon from "../../images/uber-white.svg"
import UberColorIcon from "../../images/uber-color-banner.svg"
import GetyourguideWhiteIcon from "../../images/getyourguide-white.svg"
import GetyourguideColorIcon from "../../images/getyourguide-color-banner.svg"
import HellofreshWhiteIcon from "../../images/hellofresh-logo-white.png"
import HellofreshColorIcon from "../../images/hellofresh-logo.png"
import TrainlineWhiteIcon from "../../images/trainline-white.svg"
import TrainlineColorIcon from "../../images/trainline-color-banner.svg"

interface BrandsSectionProps {
  brands?: Brand[]
  withObserver?: boolean
}

export const BrandsSection = ({
  withObserver,
  brands = [
    {
      name: "Goodiebox",
      whiteIcon: GoodieboxWhiteIcon,
      colorIcon: GoodieboxColorIcon,
      link: "https://bygoodiebox.com/",
      width: "170px",
      height: "15px",
    },
    {
      name: "Transferwise",
      whiteIcon: TransferwiseWhiteIcon,
      colorIcon: TransferwiseColorIcon,
      link: "https://wise.com/",
    },
    {
      name: "Uber",
      whiteIcon: UberWhiteIcon,
      colorIcon: UberColorIcon,
      link: "https://www.uber.com/",
      width: "99px",
      height: "35px",
    },
    {
      name: "Get your guide",
      whiteIcon: GetyourguideWhiteIcon,
      colorIcon: GetyourguideColorIcon,
      link: "https://www.getyourguide.com/",
      width: "86px",
      height: "68px",
    },
    {
      name: "Trainline",
      whiteIcon: TrainlineWhiteIcon,
      colorIcon: TrainlineColorIcon,
      link: "https://trainline.com/",
      width: "128px",
      height: "22px",
    },
    {
      name: "Hello fresh",
      whiteIcon: HellofreshWhiteIcon,
      colorIcon: HellofreshColorIcon,
      link: "https://hellofresh.com/",
      width: "170px",
      height: "55px",
    },
  ],
}: BrandsSectionProps) => {
  return (
    <>
      <StyledMediumHeading>
        Trusted by the world's best brands
      </StyledMediumHeading>
      <StyledSection>
        <StyledContainer>
          <Row
            justify={{ xs: "center", md: "space-between" }}
            align={{ sm: "center" }}
          >
            <Brands
              columsXS={4}
              brands={brands}
              withObserver={withObserver}
              noGutter
            />
          </Row>
        </StyledContainer>
      </StyledSection>
    </>
  )
}

export default BrandsSection
