import styled from "styled-components";
import media from "../../styles/media";
import { Col, Container } from "react-awesome-styled-grid";
import { Section, fadeIn, Button } from "../../styles/common.styled";
import { absoluteCenter, animation } from "../../styles/mixins";
import bannerImage from "../../images/careers-company-photo.png";
import {
  BigHeading,
  SmallHeading,
  MediumHeading
} from "../../styles/common.styled";

export const StyledContainer = styled(Container)`
  align-items: center;
`;

export const StyledSection = styled(Section)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 10rem;
  padding-bottom: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #332e5e;
  background-size: cover;

  ${media.lessThan("sm")`
    min-height: 420px;
  `}

  ${media.greaterThan("xl")`
    padding-bottom: 25rem;
  `}
`;

export const StyledCol = styled(Col)`
  padding: 1.5rem 0;

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
    flex-grow: 2;
  `}
`;

export const StyledButton = styled(Button)`
  padding: 20px;
  margin: 10px;
`;

export const StyledBigHeading = styled(BigHeading)`
  color: #fff;
`;

export const StyledMediumHeading = styled(MediumHeading)`
  padding-top: 1rem;
  color: #fff;
  text-align: center;
`;

export const StyledSmallHeading = styled(SmallHeading)`
  color: #fff;
`;

export const StyledImage = styled(bannerImage)`
  position: absolute !important;
  ${absoluteCenter};
  ${animation(fadeIn, 1, 0.8)};

  ${media.lessThan("lg")`
    width: 100% !important;
  `};

  ${media.lessThan("sm")`
    position: relative !important;
    height: auto !important;
  `};
`;
