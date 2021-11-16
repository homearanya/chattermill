import styled from "styled-components"

import media from "../../styles/media"
import { decorator } from "../../styles/mixins"
import { $colorSecondary, $colorPrimary } from "../../styles/variables"

export const StyledSection = styled.section`
  overflow: "hidden";
  padding: 5rem 0;
  ${media.lessThan("md")`
  	padding: 4rem 0;
  `}

  ${media.lessThan("sm")`
	  padding: 3rem 0;
  `}
`

export const StyledHeader = styled.h2`
  ${decorator};
  font-size: 34px;
  line-height: 1.17;
  text-align: center;
  font-weight: 400;
  margin-bottom: 7rem;
  a {
    transition: color 0.3s;
    color: ${$colorSecondary};
    :hover {
      color: ${$colorPrimary};
    }
  }
  ${media.lessThan("sm")`
    max-width: 50rem;
    margin:0 auto 5rem;
  `}
`

export const StyledRow = styled.div`
  max-width: 118rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem 9rem;
  ${media.lessThan("md")`
  	grid-gap: 4rem 3rem;
  `}

  ${media.lessThan("sm")`
	  grid-template-columns: repeat(1, 1fr);
  `}
`

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.lessThan("sm")`
	  max-width: 30rem;
	  margin: 0 auto;
  `}
`

export const StyledImage = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: 2rem;
`

export const StyledLabel = styled.span`
  font-weight: 600;
  font-size: 24px;
`

export const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`
