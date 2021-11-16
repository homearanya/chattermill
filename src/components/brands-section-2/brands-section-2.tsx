import React from "react";
import { Row } from "react-awesome-styled-grid";
import { StyledSection, StyledContainer } from "./brands-section-2.styled";

import Brands, { Brand } from "../brands";

import TechCrunchIcon from "../../images/tech-crunch.svg";
import TechCrunchColorIcon from "../../images/tech-crunch-color.svg";
import TelegraphIcon from "../../images/telegraph-logo-white.svg";
import TelegraphColorIcon from "../../images/telegraph-logo-colour.svg";
import DeloitteIcon from "../../images/deloitte.svg";
import DeloitteColorIcon from "../../images/deloitte-color.svg";
import FinancialTimesIcon from "../../images/ft.svg";
import FinancialTimesColorIcon from "../../images/ft-color.svg";
import TechNationColorIcon from "../../images/technation-logo-colour.svg";
import TechNationIcon from "../../images/technation-logo.svg";

interface BrandsSection2Props {
  brands?: Brand[];
  borderBottom?: boolean;
  borderTop?: boolean;
  withObserver?: boolean;
}

export const BrandsSection2 = ({
  brands = [
    {
      name: "TechCrunch",
      whiteIcon: TechCrunchIcon,
      colorIcon: TechCrunchColorIcon,
      link: "https://techcrunch.com/2017/12/07/chattermill/"
    },
    {
      name: "Telegraph",
      whiteIcon: TelegraphIcon,
      colorIcon: TelegraphColorIcon,
      link:
        "https://www.telegraph.co.uk/technology/2020/01/30/meet-uks-30-most-promising-tech-start-ups-vying-next-monzo/"
    },
    {
      name: "Deloitte",
      whiteIcon: DeloitteIcon,
      colorIcon: DeloitteColorIcon,
      link: "https://www.deloitte.co.uk/fast50/winners/2020/"
    },
    {
      name: "TechNation",
      whiteIcon: TechNationColorIcon,
      colorIcon: TechNationIcon,
      link: "https://technation.io/news/upscale-cohort-2020/"
    },
    {
      name: "FinancialTimes",
      whiteIcon: FinancialTimesIcon,
      colorIcon: FinancialTimesColorIcon,
      link: "https://www.ft.com/content/8b37a92b-15e6-4b9c-8427-315a8b5f4332"
    }
  ],
  borderTop,
  borderBottom,
  withObserver,
  ...rest
}: BrandsSection2Props) => {
  return (
    <StyledSection borderTop={borderTop} borderBottom={borderBottom} {...rest}>
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
  );
};

export default BrandsSection2;
