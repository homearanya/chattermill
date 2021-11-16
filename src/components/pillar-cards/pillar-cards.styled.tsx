import styled from "styled-components"
import { Container, Col, Row } from "react-awesome-styled-grid"
import { fadeIn } from "../../styles/common.styled"
import { $greyLight } from "../../styles/variables"
import { animation } from "../../styles/mixins"
import Image from "../image"
import media from "../../styles/media"

export const StyledSection = styled.section``

export const StyledContainer = styled(Container)`
  max-width: 130rem;
`

export const StyledRow = styled(Row)`
  ${animation(fadeIn, 1, 0.3)};
  max-width: 80rem;
  margin: 0 auto;
  ${media.lessThan("sm")`
	max-width: 40rem;	
  `};
`

export const StyledCol = styled(Col)`
  padding: 2rem 1rem !important;
`

export const StyledLink = styled.a`
  min-height: 25rem;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #291e45;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  ${media.lessThan("sm")`
	flex-direction: column;	
  `};
`

export const ImageWrapper = styled.div`
  padding: 2rem;
  flex: 0 0 auto;
  border-right: 1px solid ${$greyLight};
  ${media.lessThan("sm")`
	border: 0;
  	border-bottom: 1px solid ${$greyLight};
  `};
`

export const StyledImage = styled(Image)`
  display: block;
  height: 100%;
`
export const TextWrapper = styled.div`
  flex: 1 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

export const StyledTag = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #291e45;
  width: 120px;
  height: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 10px 3px;
`

export const StyledTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
`

export const StyledTagLabel = styled.span`
  color: #fff;
  margin: 10px 0px;
`

export const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 14px;
`

export const StyledCardParagraph = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin: 10px 0px;
  text-align: left;
`

export const StyledCardTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  margin: 10px 0px auto;
  flex: 1 0 auto;
`
