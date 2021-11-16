import styled from "styled-components"
import media from "../../styles/media"
import { Col, Container } from "react-awesome-styled-grid"
import { Button } from "../../styles/common.styled"
import teamImage from "../../images/team.webp"
import teamImageJpg from "../../images/team.jpg"
import {
  BigHeading,
  SmallHeading,
  MediumHeading,
} from "../../styles/common.styled"

export const StyledContainer = styled(Container)`
  align-items: center;
`

export const StyledSection = styled.section`
  padding: 10rem 10rem 10rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #33fffe5e;
  background: url(${teamImage || teamImageJpg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${media.lessThan("sm")`
    min-height: 420px;
    padding: 5rem 1rem 5rem 1rem;
  `}

  ${media.greaterThan("xl")`
    padding-bottom: 25rem;
    padding-top: 25rem;
  `}
`

export const StyledCol = styled(Col)`
  padding: 1.5rem 0;
  flex-direction: row;

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
    flex-grow: 2;
  `}
`

export const StyledButton = styled(Button)`
  padding: 20px;
  margin: 10px;
  height: 45px;
`

export const StyledBigHeading = styled(BigHeading)`
  color: #fff;
  ${media.lessThan("sm")`
    text-align: center;
  `}
`

export const StyledMediumHeading = styled(MediumHeading)`
  padding: 1rem;
  color: #fff;
  font-size: 34px;
  text-align: center;

  ${media.lessThan("sm")`
    text-align: center;
    font-size: 20px;
  `}
`

export const StyledSmallHeading = styled(SmallHeading)`
  color: #fff;
`
