import styled from "styled-components"
import media from "../../styles/media"
import { Col, Container } from "react-awesome-styled-grid"
import { Section, fadeIn } from "../../styles/common.styled"
import { absoluteCenter, animation } from "../../styles/mixins"
import bannerImage from "../../images/careers-company-photo.png"
import {
  BigHeading,
  SmallHeading,
  MediumHeading,
} from "../../styles/common.styled"

export const StyledContainer = styled(Container)`
  align-items: center;
  margin-bottom: 5rem;
`

export const StyledSection = styled(Section)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 20rem;
  padding-bottom: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #332e5e;
  background-size: cover;
  text-align: center;

  ${media.lessThan("sm")`
    min-height: 420px;
  `}

  ${media.greaterThan("xl")`
    padding-bottom: 20rem;
  `}
`

export const StyledCol = styled(Col)`
  padding: 1.5rem 0;

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
    flex-grow: 2;
  `}
`

export const StyledLink = styled.a`
  padding: 20px;
  margin: 10px;
  font-size: 1.4rem;
  line-height: 1;
  display: inline-block;
  background-color: #10c2ed;
  color: #ffffff;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-align: center;
  border: 1px solid #10c2ed;
  border-radius: 2.5rem;
  padding: 1.5rem 2.5rem;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background-image: none;
`

export const StyledBigHeading = styled(BigHeading)`
  color: #fff;
`

export const StyledMediumHeading = styled(MediumHeading)`
  padding-top: 1rem;
  color: #fff;
  text-align: center;
`

export const StyledSmallHeading = styled(SmallHeading)`
  color: #fff;
`

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
`
