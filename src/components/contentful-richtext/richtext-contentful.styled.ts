import styled from "styled-components"
import { $colorSecondary } from "../../styles/variables"
import media from "../../styles/media"

export const Wrapper = styled.div`
  h3 a {
    color: ${$colorSecondary};
  }

  h2 {
    text-align: center;
    font-size: 36px;
    font-weight: 400;
    margin: 50px 0px;

    ${media.lessThan("sm")`
		font-size: 30px;
		margin: 30px 0px;
  	`}
  }

  p {
    padding: 1rem 0rem;
    font-size: 16px;

    ${media.lessThan("sm")`
		font-size: 12px;
  	`}
  }
`
export const StyledStrong = styled.strong`
  font-weight: bold;
`

export const StyledParagraph = styled.p`
  padding: 3rem 0rem;
`
