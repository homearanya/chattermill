import styled from "styled-components"
import { Container } from "react-awesome-styled-grid"

import media from "../../styles/media"
import Image from "../image"

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  ${media.lessThan("md")`
    padding: 1rem;
    flex-direction: column;
    align-items: center;
  `}

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
    padding-bottom: 0rem;
  `}
`

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  padding: 5rem 5rem 2rem 5rem;

  :first-child {
    width: 47.5rem;
  }
  ${media.lessThan("md")`
  :first-child {
    padding: 0 5rem;
    width: 100%;
  }
`}
`

export const StyledImage = styled(Image)`
  width: 100%;
  box-shadow: 0 9px 25px -2px rgba(11, 26, 56, 0.12);
  border-radius: 5px;

  ${media.lessThan("sm")`
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
`}
`
