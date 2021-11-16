import styled from "styled-components"
import { Row } from "react-awesome-styled-grid"
import { $colorPrimary, $white } from "../../styles/variables"
import media from "../../styles/media"
import { Button } from "../../styles/common.styled"

export const StyledSection = styled.section`
  overflow: "hidden";
  padding: 5rem 0;
  ${media.lessThan("sm")`
      padding: 2rem 0;
  `}
`

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledHeader = styled.h2`
  font-size: 34px;
  line-height: 1.17;
  text-align: center;
  font-weight: 400;
`

export const StyledHeaderWrapper = styled.div`
  max-width: 600px;
`

export const StyledRow = styled(Row)`
  ${media.lessThan("sm")`
  `}
`

export const StyledExternalLink = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
`

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: 0 auto;
`

export const ButtonWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 5rem 0 !important;
`

export const StyledButton = styled(Button)`
  position: relative;
  border-radius: 1.4rem !important;
  font-size: 1.4rem !important;

  &&,
  &&:link,
  &&:visited {
    font-size: 1.7rem;
    background-color: ${$colorPrimary};
    color: ${$white};
    border: 1px solid ${$colorPrimary};
    padding: 1.5rem 4rem;
  }

  &&:hover,
  &&:active {
    background-color: ${$white};
    color: ${$colorPrimary};
  }
`
