import { Link } from "gatsby"
import styled from "styled-components"
import media from "../../styles/media"

export const StyledSection = styled.section`
  padding: 9rem 0;
  ${media.lessThan("md")`
  	padding: 6rem 0;
  `}
  ${media.lessThan("sm")`
  	padding: 3rem 0;
  `}
`

interface StyledRowProps {
  cols: number
}
export const StyledRow = styled.div<StyledRowProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  grid-column-gap: 3rem;
  justify-items: center;
  ${media.lessThan("lg")`
    grid-gap: 2rem;
  `};
  ${media.lessThan("md")`
  	grid-template-columns: repeat(2, 1fr);
  `};
  ${media.lessThan("sm")`
  	grid-template-columns: repeat(1, 1fr);
  `};
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("md")`
    margin-bottom: 50px;
`};
`

export const StyledImage = styled.img`
  display: block;
  height: 4rem;
  width: 4rem;
  margin: 0 auto 2rem;
`
export const StyledReportImage = styled.img`
  display: block;
  max-height: 372px;
  width: 100%;
  max-width: 286px;
  margin: 0 auto 2rem;
`

interface StyledLabelProps {
  boldLabel: boolean
}

export const StyledLabel = styled.h4<StyledLabelProps>`
  font-weight: ${({ boldLabel }) => `${boldLabel ? 600 : 400}`};
  font-size: 24px;
  margin-bottom: 1rem;
`

export const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`
interface StyledWrapperProps {
  fullHeight: boolean
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  height: ${({ fullHeight }) => `${fullHeight ? '100%' : 'auto'}`};
  max-height: 100%;
  text-align: center;
  padding: 3rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  flex-grow: 1;
  & > * {
    max-width: 30rem;
  }
`

export const Button = styled(Link)`
  display: block;
  width: max-content;
  font-size: 2rem;
  padding: 1.5rem 2rem;
  color: #291E45;
  background-color: #DFF500;
  border-radius: 21px;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  font-weight: 300;
  text-decoration: none;
  margin-top: 4rem;
  flex-grow: 0;

  ${media.lessThan("lg")`
    font-size: 1.8rem;
  `}
  ${media.lessThan("sm")`
    font-size: 1.6rem;
  `}
`;
