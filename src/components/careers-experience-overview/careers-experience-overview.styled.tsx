import { Container } from "react-awesome-styled-grid"
import { MediumHeading } from "../../styles/common.styled"
import styled from "styled-components"
import media from "../../styles/media"

import Image from "../image"

export const StyledSection = styled.section`
  padding: 15rem 10rem 15rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  ${media.lessThan("sm")`
    min-height: 420px;
    padding: 6rem 6rem 6rem 6rem;
  `}
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
  flex-wrap: wrap;

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  `}
`
export const StyledImage = styled(Image)`
  border-radius: 3%;
  margin: 0 0.5rem 3rem 0.5rem !important;
`
export const StyledMediumHeading = styled(MediumHeading)`
  color: #332e5e;
  text-align: left;
  font-size: 30px;

  ${media.lessThan("sm")`
    text-align: center;
  `}
`

export const Underline = styled.span`
  text-decoration: underline;
  font-weight: bold;
  text-decoration-color: #10c2ed;
`

export const StyledContainer = styled(Container)`
  width: 100%;
`
