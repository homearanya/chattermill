import styled from "styled-components"
import { Col, Row } from "react-awesome-styled-grid"
import media from "../../styles/media"
import { verticalCenter } from "../../styles/mixins"

export const StyledImg = styled.img`
  border-radius: 3px;
`

export const StyledSection = styled.section`
  padding: 5rem 0;

  ${media.lessThan("md")`
    padding: 2rem 0;
  `}
  ${media.lessThan("sm")`
    padding: 6rem 0;
  `}
`

export const StyledRow = styled(Row)`
  padding: 5rem 0;
  ${media.lessThan("sm")`
    flex-direction: column-reverse;
    padding: 1rem 0;
  `}
`

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${media.lessThan("md")`
    padding: 0 2rem;
  `}
  ${media.lessThan("sm")`
    max-width: 40rem;
    margin: 2rem auto ;
    text-align: center;
    img{
      display: inline-block;
      margin: 0 auto;
    }
  `}
`

export const StyledHeader = styled.h3`
  font-size: 36px;
  font-weight: 400;
  padding: 10px 0px;
  line-height: 1.17;
  margin-top: 1rem;
`

export const StyledParagraph = styled.p`
  font-size: 13px;
  padding: 5px 0px;
`

export const VideoWrapper = styled.div`
  ${verticalCenter};
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  video {
    display: block;
  }

  ${media.lessThan("sm")`
    margin: 0 auto 2rem;
  `};
`

export const TextWrapper = styled.div`
  padding: 5rem 0;
  ${media.lessThan("sm")`
    padding: 0;
    margin-bottom: 0rem;
  `};
`
